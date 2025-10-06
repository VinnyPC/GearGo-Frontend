import MainCard from "@/components/Cards/MainCard";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Ranking: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
    >
      <Text className="font-krub text-xl" style={styles.title}>
        Ranking dos usuários
      </Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 16,
  }

});

export default Ranking;
