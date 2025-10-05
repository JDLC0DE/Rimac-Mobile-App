import { Colors } from "@/src/constants/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
};

export default function Input({ label }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.grey[60],
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.grey[60],
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.grey[100],
  },
});
