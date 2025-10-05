import { Colors } from "@/src/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  checked?: boolean;
  onPress?: () => void;
};

export default function Checkbox({ label, checked, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      hitSlop={10}
      activeOpacity={0.7}
    >
      <Ionicons
        name={checked ? "checkbox" : "checkbox-outline"}
        size={24}
        color="black"
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.text,
  },
});
