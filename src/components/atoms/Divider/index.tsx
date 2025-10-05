import { View } from "react-native";
import { styles } from "./Divider.style";

type Props = {
  color?: string;
};

export default function Divider({ color }: Props) {
  return <View style={[{ backgroundColor: color, ...styles.divider }]} />;
}
