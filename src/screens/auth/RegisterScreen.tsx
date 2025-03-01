import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthStackParamList } from "@/src/navigation/AuthNavigator";

type RegisterScreenRouteProp = RouteProp<AuthStackParamList, "Register">;

const RegisterScreen = () => {
  const route = useRoute<RegisterScreenRouteProp>();
  const { userType } = route.params;

  const renderUserTypeMessage = () => {
    switch (userType) {
      case "peleador":
        return "Eres Peleador";
      case "entrenador":
        return "Eres Entrenador";
      case "gimnasio":
        return "Eres Gimnasio";
      default:
        return "";
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Registro</Text>
      <Text variant="bodyLarge">{renderUserTypeMessage()}</Text>
      {/* Aquí iría el formulario correspondiente para cada tipo */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
});

export default RegisterScreen;
