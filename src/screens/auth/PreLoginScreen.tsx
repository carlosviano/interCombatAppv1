// src/screens/auth/PreLoginScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthStackParamList } from "@/src/navigation/AuthNavigator";
import ButtonContained from "@/src/components/ButtonContained";

const PreLoginScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="headlineMedium" style={styles.title}>
        Elige rol de tu cuenta
      </Text>

      <ButtonContained
        buttonText="Soy peleador"
        onPress={() =>
          navigation.navigate("Register", { userType: "peleador" })
        }
      />
      <ButtonContained
        buttonText="Soy entrenador"
        onPress={() =>
          navigation.navigate("Register", { userType: "entrenador" })
        }
      />
      <ButtonContained
        buttonText="Soy dueño de un gimnasio "
        onPress={() =>
          navigation.navigate("Register", { userType: "gimnasio" })
        }
      />
      <View style={{ marginVertical: 32 }}>
        <ButtonContained
          buttonText="Ya tengo cuenta"
          mode="text"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#FFF",
  },
});

export default PreLoginScreen;
