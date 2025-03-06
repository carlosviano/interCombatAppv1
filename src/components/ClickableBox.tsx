import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TouchableOpacityProps,
  StyleSheet,
  Dimensions,
} from "react-native";

export type ClickableBoxProps = TouchableOpacityProps & {
  text?: string;
  imageUrl: keyof typeof images;
};

export const images = {
  calendario: require("../assets/images/calendario.webp"),
  homepage: require("../assets/images/homepage.png"),
  profile: require("../assets/images/profile.png"),
};

const { width: screenWidth } = Dimensions.get("window");
const itemWidth = screenWidth * 0.4;

const ClickableBox = ({ text, imageUrl, onPress }: ClickableBoxProps) => {
  return (
    <View style={[styles.container, { width: itemWidth }]}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Image
          source={images[imageUrl]}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      {text && <Text style={styles.boxText}>{text}</Text>}
    </View>
  );
};

export default ClickableBox;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
  },
  box: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  boxText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
  },
});
