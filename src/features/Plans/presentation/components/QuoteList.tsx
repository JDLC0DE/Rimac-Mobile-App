import ForMeIcon from "@/src/icons/ForMeIcon";
import ForOtherIcon from "@/src/icons/ForOtherIcon";
import { View } from "react-native";
import QuoteCard from "./QuoteCard";

type Props = {
  isForMe: boolean;
  isOther: boolean;
  onPressForMe: () => void;
  onPressForOther: () => void;
};

export default function QuoteList({
  isForMe,
  isOther,
  onPressForMe,
  onPressForOther,
}: Props) {
  return (
    <View style={{ rowGap: 24 }}>
      <QuoteCard
        selected={isForMe}
        onPressQuote={onPressForMe}
        title="Para mí"
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        Icon={<ForMeIcon />}
      />
      <QuoteCard
        selected={isOther}
        onPressQuote={onPressForOther}
        title="Para alguien más"
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
        Icon={<ForOtherIcon />}
      />
    </View>
  );
}
