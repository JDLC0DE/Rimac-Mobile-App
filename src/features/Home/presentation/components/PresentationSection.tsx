import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/theme";
import Badge from "../../../../components/atoms/Badge";

export default function PresentationSection() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Badge title="Seguro Salud Flexible" />
        <Text style={styles.title} numberOfLines={2}>Creado para ti y tu familia</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/family.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  info: {
    width: "50%",
  },
  image: {
    width: 136,
    height: 160,
    objectFit: "contain",
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.grey[100],
  },
});
