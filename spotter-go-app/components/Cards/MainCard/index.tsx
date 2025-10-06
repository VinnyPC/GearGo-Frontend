// components/PhotoCard.tsx
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
type Rarity = "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário";
type MainCardProps = {
  imageUri: string;
  title: string;
  username: string;
  likes?: number;
  rarity?: "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário";
};
const rarityColors: Record<Rarity, string> = {
  Comum: "#9CA3AF", 
  Incomum: "#10B981", 
  Raro: "#3B82F6",
  Épico: "#8B5CF6", 
  Lendário: "#F97316", 
};

const MainCard: React.FC<MainCardProps> = ({
  imageUri,
  title,
  username,
  likes = 0,
  rarity = "Comum",
}) => {
  return (
    <Card size="lg" variant="ghost" style={styles.card}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          style={[
            styles.rarityIndicator,
            { backgroundColor: rarityColors[rarity] || "gray" },
          ]}
        >
          <Text className="font-krub">{rarity}</Text>
        </View>
        <View style={styles.overlay}>
          <Text className="font-krub text-xl" style={styles.heading}>
            {title}
          </Text>
          <Text className="font-krub text-xl" style={styles.username}>
            {username}
          </Text>
        </View>
      </ImageBackground>
      <View>
        <Text className="font-krub text-xl" style={styles.likes}>
          ❤️ {likes}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "92%",
    marginBottom: 16,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 240,
    justifyContent: "flex-end",
  },
  rarityIndicator: {

  },
  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 2,
  },
  heading: {
    color: "#fff",
  },
  username: {
    color: "#fff",
  },
  likes: {
    alignSelf: "flex-end",
    padding: 8,
  },
});

export default MainCard;
