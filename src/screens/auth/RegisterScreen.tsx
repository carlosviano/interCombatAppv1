import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAuthStore } from "../../state/authStore";

const RegisterScreen = ({ navigation }: any) => {
  const login = useAuthStore((state) => state.login);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Registrarse</Text>
      <TextInput label="Email" style={styles.input} />
      <TextInput label="Contraseña" secureTextEntry style={styles.input} />
      <TextInput
        label="Confirmar Contraseña"
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={login} style={styles.button}>
        Crear Cuenta
      </Button>
      <Button onPress={() => navigation.goBack()}>Volver al Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { marginBottom: 10 },
  button: { marginVertical: 10 },
});

export default RegisterScreen;
