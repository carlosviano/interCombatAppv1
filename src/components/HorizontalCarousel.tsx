import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import ClickableBox, { images } from "./ClickableBox";

export type CarouselItemType = {
  id: string;
  nombreEvento: string;
  imageString: keyof typeof images;
};

export type HorizontalCarouselProps = {
  title: string;
  carouselData: CarouselItemType[];
};

const HorizontalCarousel = ({
  title,
  carouselData,
}: HorizontalCarouselProps) => {
  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <FlatList
        horizontal
        data={carouselData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClickableBox
            boxSize={0.2}
            text={item.nombreEvento}
            imageUrl={item.imageString}
            onPress={() => {}}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default HorizontalCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 10,
    textAlign: "left",
    margin: 10,
  },
  flatListContent: {
    paddingVertical: 5,
  },
});
