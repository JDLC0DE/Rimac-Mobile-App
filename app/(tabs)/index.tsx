import { Text, View } from "react-native";

import MainLayout from "@/src/components/layouts/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <View style={{flex: 1}}>
        <Text>Home Screen</Text>
      </View>
    </MainLayout>
  );
}
