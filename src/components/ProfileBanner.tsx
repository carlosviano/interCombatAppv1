import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import ClickableBox from "./ClickableBox";

type userRoles = "Peleador" | "Entrenador" | "Gimnasio";

export type ProfileBannerProps = {
  username: string;
  role: userRoles;
};
const ProfileBanner = ({ username, role }: ProfileBannerProps) => {
  return (
    <View style={styles.profileHeader}>
      <ClickableBox imageUrl="profile" boxSize={0.2} />
      <View style={styles.headerTextContainer}>
        <Text variant="headlineMedium" style={{ color: "white" }}>
          {username}
        </Text>
        <Text variant="bodyLarge" style={{ color: "gray" }}>
          {role}
        </Text>
      </View>
    </View>
  );
};

export default ProfileBanner;

const styles = StyleSheet.create({
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 20,
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    margin: 10,
  },
});
