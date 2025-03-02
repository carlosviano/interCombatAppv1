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
      <View>
        <Text style={styles.title}>Bienvenido, {userName}</Text>
      </View>

      <View style={styles.boxContainer}>
        {cajasMock.map((item) =>
          item == "Profile" ? (
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFF",
    textAlign: "center",
  },
  boxContainer: {
    top: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
