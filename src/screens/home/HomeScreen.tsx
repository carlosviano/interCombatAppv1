import ClickableBox from "@/src/components/ClickableBox";
import { MainStackParamList } from "@/src/navigation/MainNavigator";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const HomeScreen = () => {
  const { colors } = useTheme();
  const userName = "Carlos";
  const cajasMock = ["Profile", "Eventos", "Calendario", "Noticias"];
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Bienvenido, {userName}</Text>
          <Text style={styles.subtitle}>
            Quedan 10 días para tu próxima pelea
          </Text>
        </View>

        <View style={styles.boxContainer}>
          {cajasMock.map((item) =>
            item === "Profile" ? (
              <ClickableBox
                text={item}
                key={item}
                onPress={() => navigation.navigate("ProfileFlow")}
              />
            ) : (
              <ClickableBox text={item} key={item} />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 32,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    marginTop: 4,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
