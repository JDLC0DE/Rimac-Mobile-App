import { Colors } from "@/src/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  totalSteps: number;
  currentStep: number;
};

export default function Steps({ totalSteps, currentStep }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={20}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="chevron-back-circle-outline"
          size={24}
          color={Colors.neutral[500]}
        />
      </TouchableOpacity>
      <View style={styles.indicatorContainer}>
        <Text style={styles.indicatorText}>
          Paso {currentStep} de {totalSteps}
        </Text>
        <View style={styles.indicatorLine}>
          <View
            style={[
              styles.indicatorProgress,
              { width: `${(currentStep / totalSteps) * 100}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  indicatorText: {
    fontSize: 10,
    fontWeight: "900",
    color: Colors.neutral[700],
  },
  indicatorLine: {
    height: 6,
    width: "73.5%",
    borderRadius: 20,
    backgroundColor: Colors.neutral[400],
  },
  indicatorProgress: {
    height: 6,
    borderRadius: 40,
    backgroundColor: Colors.blueBerry,
  },
});
