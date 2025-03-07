import React from "react";
import { View } from "react-native";
import InfoBox from "./InfoBox";
import { StyleSheet } from "react-native";

export type UserInformation = {
  peso: string;
  record: string;
  nivel: string;
  experiencia: string;
};

type ProfileInfoBoxesProps = {
  user: UserInformation;
};
const ProfileInfoBoxes = ({ user }: ProfileInfoBoxesProps) => {
  return (
    <>
      <View style={styles.infoBoxesTopContainer}>
        <InfoBox label="Peso" value={user.peso} />
        <InfoBox label="Record" value={user.record} />
        <InfoBox label="Nivel" value={user.nivel} />
      </View>
      <View style={styles.infoBoxesBottomContainer}>
        <InfoBox label="Experiencia" value={user.experiencia} />
      </View>
    </>
  );
};

export default ProfileInfoBoxes;

const styles = StyleSheet.create({
  infoBoxesTopContainer: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "10%",
    margin: 10,
    gap: 16,
  },
  infoBoxesBottomContainer: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "10%",
    margin: 10,
    gap: 16,
  },
});
