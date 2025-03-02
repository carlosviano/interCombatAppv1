import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./config/theme";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
