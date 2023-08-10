import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text, Center, Select, CheckIcon } from "native-base";
import { StyleSheet, View, Button, StatusBar, ScrollView } from "react-native";

export default function App() {
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [service, setService] = useState("");

  const changeStatusBarStyleLight = () => {
    setStatusBarStyle("light-content");
  };

  const changeStatusBarStyleDark = () => {
    setStatusBarStyle("dark-content");
  };

  const changeStatusBarStyleDefault = () => {
    setStatusBarStyle("default");
  };

  return (
    // <View style={styles.container}>
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
      <Box maxW="300">
       <Select selectedValue={service} variant="outline" minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        </Box>
        <Box
          bg={{
            linearGradient: {
              colors: ["lightBlue.300", "violet.800"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          p="12"
          rounded="xl"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "#551155",
            textAlign: "center",
          }}
        >
          This is a Box with Linear Gradient
        </Box>
        <Text style={styles.text}>Hello world!</Text>
        <Button title="Change StatusBar Style Light" onPress={changeStatusBarStyleLight} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyleDark} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyleDefault} />
        <Button
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="Press Me"
        />
      </Center>
          <StatusBar
            backgroundColor={undefined}
            barStyle={statusBarStyle}
          />
    </NativeBaseProvider>
    /* </View> */
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: `url("https://images.unsplash.com/photo-1688999558024-0bbeac1c0102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")`,
    // backgroundColor: "#80aa90",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white" },
});
