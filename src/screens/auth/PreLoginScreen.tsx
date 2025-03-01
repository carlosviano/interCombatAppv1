import { AuthStackParamList } from "@/src/navigation/AuthNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const PreLoginScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          navigation.navigate("Register", { userType: "peleador" })
        }
      >
        Peleador
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Register", { userType: "entrenador" })
        }
      >
        Entrenador
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Register", { userType: "gimnasio" })
        }
      >
        Gimnasio
      </Button>
      <Button onPress={() => navigation.navigate("Login")}>
        ¿Ya tienes una cuenta?
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  button: { marginVertical: 10 },
});

export default PreLoginScreen;
