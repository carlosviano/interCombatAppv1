import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/MainNavigator";
import { useAuthStore } from "../../state/authStore";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Bienvenido a la App</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("ProfileFlow")}
        style={styles.button}
      >
        Ir a Mi Perfil
      </Button>
      <Button mode="contained" onPress={logout} style={styles.button}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { marginTop: 20, width: "80%" },
});

export default HomeScreen;
