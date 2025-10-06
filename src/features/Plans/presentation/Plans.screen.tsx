import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import { StyleSheet, Text } from "react-native";
import PlansList from "./components/PlansList";
import QuoteList from "./components/QuoteList";
import usePlansInteractor from "./Plans.interactor";

export default function PlansScreen() {
  const {
    isForMe,
    isOther,
    userData,
    plansData,
    selectedQuote,
    onPressPlan,
    onPressForMe,
    onPressForOther,
  } = usePlansInteractor();

  return (
    <MainLayout gradient={false} footer={false} steps currentStep={1}>
      <Text style={styles.title}>
        {userData.name} ¿Para quién deseas cotizar?
      </Text>
      <Text style={styles.subtitle}>
        Selecciona la opción que se ajuste más a tus necesidades.
      </Text>
      <QuoteList
        isForMe={isForMe}
        isOther={isOther}
        onPressForMe={onPressForMe}
        onPressForOther={onPressForOther}
      />
      {selectedQuote ? (
        <PlansList onPressPlan={onPressPlan} data={plansData.data} />
      ) : null}
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.neutral[700],
    marginBottom: 8,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.neutral[700],
    marginBottom: 32,
    lineHeight: 28,
  },
});
