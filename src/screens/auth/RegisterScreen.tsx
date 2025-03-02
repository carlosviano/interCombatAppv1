import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  useRoute,
  RouteProp,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { AuthStackParamList } from "@/src/navigation/AuthNavigator";

import {
  REGISTER_OPTIONS_PELEADOR,
  REGISTER_OPTIONS_ENTRENADOR,
  REGISTER_OPTIONS_GIMNASIO,
  RegisterFormField,
} from "@/src/const/registerOptions";
import ButtonContained from "@/src/components/ButtonContained";
import { StyledTextInput } from "@/src/components/StyledInput";

type RegisterScreenRouteProp = RouteProp<AuthStackParamList, "Register">;

const RegisterScreen = () => {
  const { colors } = useTheme();
  const route = useRoute<RegisterScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const { userType } = route.params;

  let fields: RegisterFormField[];
  switch (userType) {
    case "peleador":
      fields = REGISTER_OPTIONS_PELEADOR;
      break;
    case "entrenador":
      fields = REGISTER_OPTIONS_ENTRENADOR;
      break;
    case "gimnasio":
      fields = REGISTER_OPTIONS_GIMNASIO;
      break;
    default:
      fields = [];
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="headlineMedium" style={styles.title}>
        Registro {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </Text>
      {fields.map((field) => (
        <StyledTextInput
          key={field.title}
          label={field.label}
          placeholder={field.placeholder}
          secureTextEntry={field.secure || false}
          style={styles.input}
        />
      ))}
      <ButtonContained
        buttonText="Crear cuenta"
        onPress={() => navigation.navigate("Login")}
      />
      <ButtonContained
        buttonText="atras"
        onPress={() => navigation.navigate("PreLoginScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#FFF",
  },
  input: {
    marginBottom: 10,
  },
});

export default RegisterScreen;
