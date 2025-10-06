import MainCard from "@/components/Cards/MainCard";
import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
    >
      <Text className="font-krub text-xl" style={styles.title}>
        Destaques do dia
      </Text>
      <MainCard
        imageUri="https://conteudo.imguol.com.br/blogs/104/files/2014/03/DeLorean_03.jpg"
        title="DeLorean DMC-12 1982"
        username="GustavoBrasil272"
        likes={1024}
        rarity="Lendário"
      />
      <MainCard
        imageUri="https://garagemmaster.com.br/wp-content/uploads/2024/11/02_11zon-100.webp"
        title="SP-2 1976"
        username="CarrosdosAnos70"
        likes={988}
        rarity="Épico"
      />
      <MainCard
        imageUri="https://cdn.iset.io/assets/41496/produtos/65/suspensao-troller-ate-2014-angel-eyes-rgb-wb4x4.jpg"
        title="Troller 2008"
        username="OffRoadLover"
        likes={722}
        rarity="Raro"
      />
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
  },
  card: {
    width: "100%",
    overflow: "hidden",
    marginVertical: 10,
  },
  
});

export default HomeScreen;
