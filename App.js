import Map from "./components/Map";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Map />
      </PaperProvider>
    </NavigationContainer>
  );
}
