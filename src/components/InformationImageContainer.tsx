import React from "react";
import { View } from "react-native";
import ClickableBox from "@/src/components/ClickableBox";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

type informationImageContainerProps = {
  //añadirle imagen cuando tengamos mas
  title: string;
  value: string;
};
const InformationImageContainer = ({
  title,
  value,
}: informationImageContainerProps) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <ClickableBox imageUrl="calendario" boxSize={0.2} />
      </View>
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
};

export default InformationImageContainer;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },
  infoTitle: {
    fontSize: 16,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: 24,
  },
  infoValue: {
    fontSize: 14,
    color: "gray",
    textTransform: "uppercase",
  },
});
