import { Colors } from "@/src/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1 }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: "100%",
    backgroundColor: Colors.grey[100],
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.common.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
