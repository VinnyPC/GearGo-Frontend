import { Text, View } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <HomeScreen />
    </View>
  );
}
export const options = {
  headerShown: false,
};
