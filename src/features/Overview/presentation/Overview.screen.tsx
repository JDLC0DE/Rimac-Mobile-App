import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import { StyleSheet, Text } from "react-native";
import OverviewCard from "./components/OverviewCard";

export default function OverviewScreen() {
  return (
    <MainLayout gradient={false} footer={false} steps>
      <Text style={styles.title}>Resumen del seguro</Text>
      <OverviewCard />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    color: Colors.neutral[700],
    textAlign: "center",
  },
});
