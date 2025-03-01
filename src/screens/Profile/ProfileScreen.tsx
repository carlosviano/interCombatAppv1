import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  const user = {
    name: "Carlos",
    nationality: "Española",
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Mi Perfil</Text>
      <Text variant="bodyLarge">Nombre: {user.name}</Text>
      <Text variant="bodyLarge">Nacionalidad: {user.nationality}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("EditProfile")}
        style={styles.button}
      >
        Editar Perfil
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  button: { marginTop: 20 },
});

export default ProfileScreen;
