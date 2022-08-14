import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./components/MainStack";
import Map from "./components/Map";
import Rest from "./components/Rest";

const Stack = createNativeStackNavigator();

const navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Rest" component={Rest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigate;
