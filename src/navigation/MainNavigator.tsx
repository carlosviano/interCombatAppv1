import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileNavigator from "./ProfileNavigator";
import EventsMainPage from "../screens/eventos/EventsMainPage";
import EventsNavigator from "./EventsNavigator";

export type MainStackParamList = {
  Home: undefined;
  ProfileFlow: undefined;
  EventsFlow: undefined;
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
      <MainStack.Screen
        name="EventsFlow"
        component={EventsNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
