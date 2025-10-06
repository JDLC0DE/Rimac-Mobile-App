import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import { StyleSheet, Text } from "react-native";
import OverviewCard from "./components/OverviewCard";
import useOverviewInteractor from "./Overview.interactor";

export default function OverviewScreen() {
  const { overviewFormat } = useOverviewInteractor();
  return (
    <MainLayout gradient={false} footer={false} steps currentStep={2}>
      <Text style={styles.title}>Resumen del seguro</Text>
      <OverviewCard
        documentNumber={overviewFormat.documentNumber}
        documentType={overviewFormat.documentType}
        phoneNumber={overviewFormat.phoneNumber}
        planCost={overviewFormat.planCost}
        planName={overviewFormat.planName}
        userName={overviewFormat.userName}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    color: Colors.neutral[700],
    textAlign: "center",
  },
});
