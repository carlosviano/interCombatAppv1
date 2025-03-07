import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "react-native-paper";
import ProfileBanner from "@/src/components/ProfileBanner";
import ProfileInfoBoxes, {
  UserInformation,
} from "@/src/components/ProfileInfoBoxes";
import InformationImageContainer from "@/src/components/InformationImageContainer";
import HorizontalCarousel from "@/src/components/HorizontalCarousel";
import { eventos } from "../eventos/EventsMainPage";

const ProfileScreen = () => {
  const { colors } = useTheme();

  const user: UserInformation = {
    //cambiables los datos de dentro a lo que haga falta
    peso: "70 KG",
    record: "12-0",
    nivel: "PRO",
    experiencia: "5 AÑOS",
  };
  //Crear un clickable circle para usar en el perfil?
  // este circle que aumente la foto de perfil?? Not clikable si no?

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <View className="profileBannerContainer">
          <ProfileBanner role="Peleador" username="Carlos Viano Compan" />
        </View>
        <ProfileInfoBoxes user={user} />
        <InformationImageContainer
          title="Gimnasio"
          value="Training Thai Studio,Malaga"
        />
        <InformationImageContainer
          title="Entrenador"
          value="Jorge Alonso Conde"
        />
        <HorizontalCarousel title="Eventos de Carlos" carouselData={eventos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  content: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 60,
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  infoBoxesTopContainer: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "30%",
    margin: 10,
    gap: 16,
  },
  infoBoxesBottomContainer: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "20%",
    margin: 10,
    gap: 16,
  },
});

export default ProfileScreen;
