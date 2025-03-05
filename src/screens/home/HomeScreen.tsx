import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainStackParamList } from "@/src/navigation/MainNavigator";
import ClickableBox from "@/src/components/ClickableBox";
import ClickableRectangle from "@/src/components/ClickableRectangle";

export default function HomeScreen() {
  const userName = "Carlos";
  const cajasMock = ["Profile", "Calendario"];
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  //Todo: Change images for icons in a future
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido, {userName}</Text>
          <Text style={styles.subtitle}>
            Quedan 10 días para tu próxima pelea
          </Text>
          <View style={styles.boxContainer}>
            <View style={styles.topRow}>
              {cajasMock.map((item) =>
                item === "Profile" ? (
                  <ClickableBox
                    imageUrl="profile"
                    key={item}
                    text={item}
                    onPress={() => navigation.navigate("ProfileFlow")}
                  />
                ) : (
                  <ClickableBox key={item} text={item} imageUrl="calendario" />
                )
              )}
            </View>

            <View style={styles.bottomRow}>
              <ClickableRectangle text="Eventos" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
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
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  bottomRow: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
});
