import Divider from "@/src/components/atoms/Divider";
import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import PresentationSection from "./components/PresentationSection";
import QuoteFormSection from "./components/QuoteFormSection";
import useHomeInteractor from "./Home.interactor";

export default function HomeScreen() {
  const {
    isAcceptPrivacyPolicy,
    isAcceptCommercialPolicy,
    toggleAcceptPrivacyPolicy,
    toggleAcceptCommercialPolicy,
  } = useHomeInteractor();

  return (
    <MainLayout>
      <PresentationSection />
      <Divider color={Colors.grey[30]} />
      <QuoteFormSection
        isAcceptPrivacyPolicy={isAcceptPrivacyPolicy}
        isAcceptCommercialPolicy={isAcceptCommercialPolicy}
        toggleAcceptPrivacyPolicy={toggleAcceptPrivacyPolicy}
        toggleAcceptCommercialPolicy={toggleAcceptCommercialPolicy}
      />
    </MainLayout>
  );
}
