import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import HorizontalCarousel, {
  CarouselItemType,
} from "@/src/components/HorizontalCarousel";
import { ScrollView } from "react-native-gesture-handler";

export const eventos: CarouselItemType[] = [
  { id: "1", nombreEvento: "Evento 1", imageString: "profile" },
  { id: "2", nombreEvento: "Evento 2", imageString: "calendario" },
  { id: "3", nombreEvento: "Evento 3", imageString: "profile" },
  { id: "4", nombreEvento: "Evento 4", imageString: "calendario" },
  { id: "5", nombreEvento: "Evento 5", imageString: "profile" },
];

const EventsMainPage = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Eventos</Text>
        <HorizontalCarousel title="Proximamente" carouselData={eventos} />
        <HorizontalCarousel title="Esta semana" carouselData={eventos} />
        <HorizontalCarousel
          title="Que podrian interesarte"
          carouselData={eventos}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsMainPage;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  content: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    marginBottom: 24,
    fontSize: 38,
    fontWeight: "600",
    color: "#FFF",
    margin: 10,
  },
  carouselContainer: {
    width: "90%",
    alignSelf: "center",
  },
  flatListContent: {
    paddingVertical: 5,
  },
});
