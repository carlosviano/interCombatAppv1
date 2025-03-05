import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileNavigator from "./ProfileNavigator";

export type MainStackParamList = {
  Home: undefined;
  ProfileFlow: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="ProfileFlow"
        component={ProfileNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
