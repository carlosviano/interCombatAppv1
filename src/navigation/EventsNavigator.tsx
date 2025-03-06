import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsMainPage from "../screens/eventos/EventsMainPage";

export type EventsNavigatorStackParamList = {
  ProximosEventos: undefined;
};

const EventsNavigatorStack =
  createStackNavigator<EventsNavigatorStackParamList>();

const EventsNavigator = () => {
  return (
    <EventsNavigatorStack.Navigator>
      <EventsNavigatorStack.Screen
        name="ProximosEventos"
        component={EventsMainPage}
        options={{ headerShown: false }}
      />
    </EventsNavigatorStack.Navigator>
  );
};

export default EventsNavigator;
