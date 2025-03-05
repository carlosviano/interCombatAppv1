import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

type StyledButtonProps = Omit<ButtonProps, "children"> & {
  buttonText: string;
};

export default function StyledButton({
  buttonText,
  style,
  mode = "contained",
  ...props
}: StyledButtonProps) {
  return (
    <Button
      buttonColor="#2C2C2C"
      textColor="#FFFFFF"
      style={[styles.buttonContainer, style]}
      contentStyle={styles.buttonContent}
      labelStyle={styles.buttonLabel}
      {...props}
    >
      {buttonText}
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
  },
  buttonContent: {
    height: 60,
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
