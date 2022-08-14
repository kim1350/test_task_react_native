import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const MainStack = ({ navigation }) => {
  return (
    <View style={styles.mainStack}>
      <Button
        title="Rest"
        onPress={() => {
          navigation.navigate("Rest");
        }}
      />
      <Button
        title="Map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainStack;
