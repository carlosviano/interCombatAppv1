import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  // Estados para los campos del formulario
  const [name, setName] = useState("Carlos");
  const [nationality, setNationality] = useState("Española");

  const handleSave = () => {
    // Aquí deberías actualizar la información del usuario (por ejemplo, mediante un store o una llamada a la API)
    console.log("Perfil actualizado:", { name, nationality });
    // Al guardar, volvemos a la pantalla de perfil
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Editar Perfil</Text>
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Nacionalidad"
        value={nationality}
        onChangeText={setNationality}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Guardar Cambios
      </Button>
      <Button onPress={() => navigation.goBack()}>Cancelar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { marginBottom: 10 },
  button: { marginVertical: 10 },
});

export default EditProfileScreen;
