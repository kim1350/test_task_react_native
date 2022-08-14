import { View, Text } from "react-native";
import React from "react";
import YaMap, { Circle } from "react-native-yamap";

const Map = () => {
  return (
    <View>
      <YaMap style={{ flex: 1 }}></YaMap>
    </View>
  );
};

export default Map;
