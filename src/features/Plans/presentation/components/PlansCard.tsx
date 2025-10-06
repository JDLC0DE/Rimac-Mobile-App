import Button from "@/src/components/atoms/Button";
import Divider from "@/src/components/atoms/Divider";
import { Colors } from "@/src/constants/theme";
import HouseIcon from "@/src/icons/HouseIcon";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  price: number;
  description: string[];
  onPressPlan?: () => void;
};

export default function PlansCard({
  title,
  price,
  description,
  onPressPlan,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>{title}</Text>
        <HouseIcon />
      </View>
      <Text style={styles.planCostText}>COSTO DEL PLAN</Text>
      <Text style={styles.planCostValueText}>${price} al mes</Text>
      <Divider color={Colors.grey[30]} />
      <View style={styles.list}>
        {description.map((item, index) => (
          <View key={`${item}-${index}`} style={styles.listItem}>
            <View style={styles.listItemBullet} />
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={{ marginTop: "auto" }}>
        <Button
          title="Seleccionar plan"
          bgColor={Colors.redRimac}
          onPress={onPressPlan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 288,
    height: 662,
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingBottom: 48,
    backgroundColor: Colors.common.white,

    // shadows
    shadowColor: "#AEACF3",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 10,
  },
  headerTitleText: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 32,
    color: Colors.neutral[700],
    width: 160,
  },
  planCostText: {
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    color: Colors.neutral[600],
  },
  planCostValueText: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 28,
    color: Colors.neutral[700],
    marginBottom: 24,
  },
  list: {
    gap: 24,
    marginTop: 24,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
  },
  listItemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral[700],
    marginTop: 10,
  },
  listItemText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: "400",
    color: Colors.neutral[700],
    width: "92%",
  },
});
