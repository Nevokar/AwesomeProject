import React from "react";
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
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.685096,
          longitude: 23.318981,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
        <GPSButton />
      </View>
      {/* <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1688999558024-0bbeac1c0102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        }}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground> */}
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
    width: "65%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
});
