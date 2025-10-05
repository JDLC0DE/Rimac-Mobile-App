import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import { StyleSheet, Text } from "react-native";
import QuoteList from "./components/QuoteList";

export default function PlansScreen() {
  return (
    <MainLayout gradient={false} footer={false} steps>
      <Text style={styles.title}>Rocío ¿Para quién deseas cotizar?</Text>
      <Text style={styles.subtitle}>
        Selecciona la opción que se ajuste más a tus necesidades.
      </Text>
      <QuoteList />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.neutral[700],
    marginBottom: 8,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.neutral[700],
    marginBottom: 32,
    lineHeight: 28,
  },
});
