import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

export type ClickableBoxProps = TouchableOpacityProps & {
  text: string;
  imageUrl: keyof typeof images;
};

const images = {
  calendario: require("../assets/images/calendario.webp"),
  homepage: require("../assets/images/homepage.png"),
  profile: require("../assets/images/profile.png"),
};

export default function ClickableBox({
  text,
  imageUrl,
  onPress,
}: ClickableBoxProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Image
          source={images[imageUrl]}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.boxText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "40%",
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
