import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";
import ButtonContained from "@/src/components/ButtonContained";
import { MainStackParamList } from "@/src/navigation/MainNavigator";

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const mainNavigation = useNavigation<NavigationProp<MainStackParamList>>();
  const { colors } = useTheme();
  const user = {
    name: "Carlos",
    nationality: "Española",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="headlineMedium" style={{ color: "white" }}>
        Mi Perfil
      </Text>
      <Text variant="bodyLarge">Nombre: {user.name}</Text>
      <Text variant="bodyLarge">Nacionalidad: {user.nationality}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("EditProfile")}
        style={styles.button}
      >
        Editar Perfil
      </Button>
      <ButtonContained
        buttonText="atras"
        onPress={() => mainNavigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  button: { marginTop: 20 },
});

export default ProfileScreen;
