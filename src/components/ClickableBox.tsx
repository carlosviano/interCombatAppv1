import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

// Definimos las props: ya no incluimos imageSource ya que usaremos un require fijo.
export type ClickableBoxProps = TouchableOpacityProps & {
  text: string;
};

export default function ClickableBox({ text, onPress }: ClickableBoxProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Image
          source={require("../assets/images/homepage.png")}
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
    alignItems: "flex-start",
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
