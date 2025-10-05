import { Colors } from "@/src/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};

export default function Badge({ title }: Props) {
  return (
    <LinearGradient
      colors={["#00F4E2", "#00FF7F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 2,
    maxWidth: 140,
  },
  text: {
    color: Colors.grey[100],
    fontSize: 12,
    fontWeight: "700",
  },
});
