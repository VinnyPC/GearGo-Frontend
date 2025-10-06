import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import HeaderCustom from "@/components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import HomeScreen from "./src/screens/Home/HomeScreen";
import Ranking from "./src/screens/Ranking/Ranking";
import Capturar from "./src/screens/Capturar/Capturar";
import Album from "./src/screens/Album/Album";
import Conquistas from "./src/screens/Conquistas/Conquistas";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  
  return (
    <GluestackUIProvider mode="dark">
      <Tab.Navigator
        screenOptions={{
          header: () => <HeaderCustom />, // header customizado em todas as telas
          tabBarActiveTintColor: "#4F46E5",
          tabBarInactiveTintColor: "#888",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={Ranking}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Capturar"
          component={Capturar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Álbum"
          component={Album}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Conquistas"
          component={Conquistas}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </GluestackUIProvider>
  );
}
