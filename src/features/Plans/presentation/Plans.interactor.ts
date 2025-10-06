import { useUser } from "@/src/context/user.context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function usePlansInteractor() {
  const navigate = useNavigation();
  const { userData } = useUser();
  const [quoteType, setQuoteType] = useState<"me" | "other" | undefined>(undefined);

  const isForMe = quoteType === "me";
  const isOther = quoteType === "other";
  const selectedQuote = quoteType !== undefined;

  const onPressForMe = () => {
    setQuoteType("me");
  };

  const onPressForOther = () => {
    setQuoteType("other");
  };

  const onPressPlan = () => {
    // navigate.navigate("overview" as never);
    console.log(userData.data);
  };
  return {
    onPressPlan,
    userData: userData.data,
    isForMe,
    isOther,
    selectedQuote,
    onPressForMe,
    onPressForOther,
  };
}
