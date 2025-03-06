import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useAuthStore } from "../../state/authStore";
import StyledTextInput from "@/src/components/StyledInput";
import StyledButton from "@/src/components/StyledButton";

const LoginScreen = ({ navigation }: any) => {
  const { colors } = useTheme();
  const login = useAuthStore((state) => state.login);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="titleLarge" style={{ color: "white" }}>
        Iniciar Sesión
      </Text>
      <StyledTextInput label="Email" style={styles.input} />
      <StyledTextInput
        label="Contraseña"
        secureTextEntry
        style={styles.input}
      />
      <StyledButton buttonText="Entrar" onPress={login} style={styles.button} />
      <StyledButton
        buttonText="Registrarme"
        onPress={() => navigation.navigate("PreLoginScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: { marginBottom: 10 },
  button: { marginVertical: 10 },
});

export default LoginScreen;
