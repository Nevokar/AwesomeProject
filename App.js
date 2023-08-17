import Map from "./components/Map";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Map />
    </PaperProvider>
  );
}
