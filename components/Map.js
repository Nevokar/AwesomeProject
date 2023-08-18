import React, { useState, useRef } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import { useTheme, Searchbar } from "react-native-paper";
import GPSButton from "./GPSButton";

export default function Map() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState({
    latitude: 42.685096,
    longitude: 23.318981,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [camera, setCamera] = useState();
  const onChangeSearch = (query) => setSearchQuery(query);
  const theme = useTheme();
  const map = useRef(null)

  function cameraChange(camera) {
    map.current.animateCamera(camera)
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={(current) => map.current = current}
        style={styles.map}
        region={region}
        camera={camera}
      />
      <View style={styles.inputWrapper}>
        <Searchbar
        //   theme={{ colors: { outline: theme.colors.primary } }}
          mode="view"
          style={styles.input}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <GPSButton cameraChange={cameraChange} />
      </View>
      <StatusBar backgroundColor={undefined} barStyle={"default"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  inputWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "55%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
});
