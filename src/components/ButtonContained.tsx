import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

type ButtonContainedProps = Omit<ButtonProps, "children"> & {
  buttonText: string;
};

export default function ButtonContained({
  buttonText,
  style,
  ...props
}: ButtonContainedProps) {
  return (
    <Button
      mode="contained"
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
