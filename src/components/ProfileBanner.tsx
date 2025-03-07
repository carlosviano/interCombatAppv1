import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import ClickableBox from "./ClickableBox";

type userRoles = "Peleador" | "Entrenador" | "Gimnasio";

export type ProfileBannerProps = {
  username: string;
  role: userRoles;
};

const { width: screenWidth } = Dimensions.get("window");

const ProfileBanner = ({ username, role }: ProfileBannerProps) => {
  return (
    <View style={styles.profileHeader}>
      <View style={styles.imageContainer}>
        <ClickableBox imageUrl="profile" boxSize={0.2} />
      </View>
      <View style={styles.headerTextContainer}>
        <Text
          variant="headlineMedium"
          style={styles.usernameText}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {username}
        </Text>
        <Text variant="bodyLarge" style={styles.roleText}>
          {role}
        </Text>
      </View>
    </View>
  );
};

export default ProfileBanner;

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    gap: 10,
  },
  imageContainer: {
    width: screenWidth * 0.2,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  usernameText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  roleText: {
    color: "gray",
  },
});
