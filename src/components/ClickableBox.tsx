import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

export type ClickableBoxProps = TouchableOpacityProps & {
  text: string;
};

export default function ClickableBox({ text, onPress }: ClickableBoxProps) {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text style={styles.boxText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "40%",
    aspectRatio: 1,
    backgroundColor: "#222",
    borderRadius: 12,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
