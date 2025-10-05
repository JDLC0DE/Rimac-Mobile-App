import { StyleSheet, View } from "react-native";

type Props = {
  color?: string;
};

export default function Divider({ color }: Props) {
  return <View style={[{ backgroundColor: color, ...styles.divider }]} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
  },
});