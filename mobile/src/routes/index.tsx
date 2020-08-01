import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Points from "../screens/Points";
import Details from "../screens/Details";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Points" component={Points} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
