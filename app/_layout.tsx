import { Colors } from "@/src/constants/theme";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "react-native-reanimated";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaProvider>
        <View
          style={{
            flex: 1,
            paddingTop: insets.top,
            // paddingBottom: insets.bottom,
            backgroundColor: Colors.common.white,
          }}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="dark" />
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
