import Divider from "@/src/components/atoms/Divider";
import { Colors } from "@/src/constants/theme";
import FamilyIcon from "@/src/icons/FamilyIcon";
import { StyleSheet, Text, View } from "react-native";

export default function OverviewCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Precios calculados para:</Text>
      <View style={styles.userContainer}>
        <FamilyIcon />
        <Text style={styles.user}>Rocio Miranda Díaz</Text>
      </View>
      <Divider color={Colors.grey[30]} />
      <View style={styles.details}>
        <Text style={styles.detailTitle}>Responsable de pago</Text>
        <Text style={styles.detailItem}>DNI: 444888888</Text>
        <Text style={styles.detailItem}>Celular: 5130216147</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailTitle}>Plan elegido</Text>
        <Text style={styles.detailItem}>Plan en Casa y Clínica</Text>
        <Text style={styles.detailItem}>Costo del Plan: $99 al mes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 308,
    borderRadius: 24,
    backgroundColor: Colors.common.white,
    paddingHorizontal: 32,
    paddingVertical: 24,
    marginTop: 40,

    // shadows
    shadowColor: "#AEACF3",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  headerTitle: {
    fontSize: 10,
    fontWeight: "900",
    lineHeight: 16,
    color: Colors.neutral[700],
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  user: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    color: Colors.neutral[700],
  },
  details: {
    marginTop: 16,
    gap: 4,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    color: Colors.neutral[700]
  },
  detailItem: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    color: Colors.neutral[700]
  },
});
