import { Colors } from "@/src/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  bgColor?: string;
};

export default function Button({
  title,
  onPress,
  disabled,
  bgColor = Colors.grey[100],
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1, backgroundColor: bgColor },
      ]}
      onPress={onPress}
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
