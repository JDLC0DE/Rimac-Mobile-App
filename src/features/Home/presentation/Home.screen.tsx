import Divider from "@/src/components/atoms/Divider";
import MainLayout from "@/src/components/layouts/MainLayout";
import { Colors } from "@/src/constants/theme";
import PresentationSection from "./components/PresentationSection";

export default function HomeScreen() {
  return (
    <MainLayout>
      <PresentationSection />
      <Divider color={Colors.grey[30]} />
    </MainLayout>
  );
}
