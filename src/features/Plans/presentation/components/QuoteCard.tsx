import { Colors } from "@/src/constants/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  selected?: boolean;
  Icon: React.ReactElement;
};

export default function QuoteCard({
  title,
  description,
  selected,
  Icon,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: selected ? 3 : 0,
          borderColor: selected ? Colors.neutral[700] : "transparent",
        },
      ]}
    >
      <View style={styles.check}>
        {selected ? (
          <MaterialCommunityIcons
            name="check-circle"
            size={24}
            color={Colors.success}
          />
        ) : (
          <FontAwesome
            name="circle-thin"
            size={24}
            color={Colors.neutral[500]}
          />
        )}
      </View>
      <View style={styles.titleContainer}>
        {Icon}
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.common.white,
    height: 160,
    borderRadius: 24,
    paddingHorizontal: 24,

    // shadows
    shadowColor: "#AEACF3",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  check: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.neutral[700],
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});
