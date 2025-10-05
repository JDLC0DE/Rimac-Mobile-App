import ForMeIcon from "@/src/icons/ForMeIcon";
import ForOtherIcon from "@/src/icons/ForOtherIcon";
import { View } from "react-native";
import QuoteCard from "./QuoteCard";

export default function QuoteList() {
  return (
    <View style={{ rowGap: 24 }}>
      <QuoteCard
        selected
        title="Para mí"
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        Icon={<ForMeIcon />}
      />
      <QuoteCard
        title="Para alguien más"
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
        Icon={<ForOtherIcon />}
      />
    </View>
  );
}
