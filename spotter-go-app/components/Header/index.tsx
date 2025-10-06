import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";

export default function HeaderCustom() {
  return (
    <View style={styles.headerContainer}>
      <CameraAltIcon style={{ color: "#000" }} />
      <Image
        style={{ width: 200, height: 80, resizeMode: "contain" }}
        source={require("../../assets/images/logo-spt-go.png")}
      />
    <PersonIcon style={{ color: "#000" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
