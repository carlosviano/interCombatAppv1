import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type StyledTextInputProps = TextInputProps;

const StyledTextInput = ({ style, ...props }: StyledTextInputProps) => {
  return (
    <TextInput mode="outlined" style={[styles.default, style]} {...props} />
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
  default: {
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#2C2C2C",
  },
});
