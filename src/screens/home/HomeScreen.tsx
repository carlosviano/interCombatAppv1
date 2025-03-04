import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainStackParamList } from "@/src/navigation/MainNavigator";
import ClickableBox from "@/src/components/ClickableBox";

export default function HomeScreen() {
  const userName = "Carlos";
  const cajasMock = ["Profile", "Eventos", "Calendario", "Noticias"];
  const { colors } = useTheme();

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido, {userName}</Text>
        <Text style={styles.subtitle}>
          Quedan 10 días para tu próxima pelea
        </Text>

        <View style={styles.boxContainer}>
          {cajasMock.map((item) =>
            item === "Profile" ? (
              <ClickableBox
                key={item}
                text={item}
                onPress={() => navigation.navigate("ProfileFlow")}
              />
            ) : (
              <ClickableBox key={item} text={item} />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 4,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 20,
    marginLeft: 16,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
