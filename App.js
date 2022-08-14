import NavigateSatck from "./navigate";
import { StatusBar } from "expo-status-bar";
import YaMap from "react-native-yamap";

export default function App() {
  YaMap.init("2615293c-9206-4679-8a7e-d98bf289bf38");
  return (
    <>
      <NavigateSatck />
      <StatusBar hidden={true} />
    </>
  );
}
