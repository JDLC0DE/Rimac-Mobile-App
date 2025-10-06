import { useNavigation } from "@react-navigation/native";

export default function usePlansInteractor() {
  const navigate = useNavigation()

  const onPressPlan = () => {
    navigate.navigate("overview" as never);
  };
  return { onPressPlan };
}
