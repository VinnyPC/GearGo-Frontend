import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const Conquistas: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
    >
      <Text className="font-krub text-xl" style={styles.title}>
        tela de Conquistas
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

export default Conquistas;
