import React, { useState, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
// Geolocation library.
// import Geolocation from '@react-native-community/geolocation';
// Geolocation.getCurrentPosition(info => console.log(info));
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "background-location-task";

const requestPermissions = async () => {
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === "granted") {
    const { status: backgroundStatus } =
      await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
    console.log("data:", data);
    console.log(locations);
  }
});

export default function GPSButton({ cameraChange }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        requestPermissions();
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    console.log(errorMsg);
  }, []);

  return (
    <>
      <IconButton
        mode="contained"
        icon="crosshairs-gps"
        iconColor="black"
        containerColor="white"
        size={44}
        style={styles.button}
        onPress={() =>
            cameraChange({
            center: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            pitch: 0,
            heading: 0,
            zoom: 19,
          })
        }
      />

      <IconButton
        mode="contained"
        icon="crosshairs-gps"
        iconColor="purple"
        containerColor="white"
        size={44}
        style={styles.button}
        onPress={requestPermissions}
        title="Enable background location"
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    height: 72,
    width: 72,
  },
});
