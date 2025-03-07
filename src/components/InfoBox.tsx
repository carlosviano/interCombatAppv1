import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface InfoBoxProps {
  label: string;
  value: string | number;
}

const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    fontSize: 14,
    color: "#aaa",
    textTransform: "uppercase",
  },
});

export default InfoBox;
