import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

export type ClickableRectangleProps = TouchableOpacityProps & {
  text: string;
};

export default function ClickableRectangle({
  text,
  onPress,
}: ClickableRectangleProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Image
          source={require("../assets/images/eventos.png")}
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
    width: "100%",
    margin: 10,
    alignItems: "center",
  },
  box: {
    width: "100%",
    aspectRatio: 3,
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "repeat",
  },
  boxText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
  },
});
