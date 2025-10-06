import { useOverview } from "@/src/context/overview.context";
import { usePlans } from "@/src/context/plans.context";
import { useUser } from "@/src/context/user.context";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import GetPlanUseCase from "../application/getPlans.useCase";

export default function usePlansInteractor() {
  const navigation = useNavigation();
  const { userData } = useUser();
  const [quoteType, setQuoteType] = useState<"me" | "other" | undefined>(
    undefined
  );
  const { plansData, setPlansData } = usePlans();
  const { setOverviewData } = useOverview();

  const isForMe = quoteType === "me";
  const isOther = quoteType === "other";
  const selectedQuote = quoteType !== undefined;

  const calculeAge = (fechaNacimiento: string) => {
    const [dia, mes, año] = fechaNacimiento.split("-");
    const fecha = new Date(`${año}-${mes}-${dia}`);

    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    if (
      mesActual < fecha.getMonth() ||
      (mesActual === fecha.getMonth() && diaActual < fecha.getDate())
    ) {
      edad--;
    }

    return edad;
  };

  const fetchGetPlans = async () => {
    try {
      setPlansData({
        ...plansData,
        isLoading: true,
      });
      const getPlansResponse = await GetPlanUseCase.execute();
      const age = calculeAge(userData.data.birthDay);
      const filteredPlans = getPlansResponse.filter((plan) => age <= plan.age);
      const plans = filteredPlans.map((plan, index) => ({
        ...plan,
        id: index + 1,
      }));
      setPlansData({
        ...plansData,
        data: plans,
        isLoading: false,
      });
    } catch (error) {
      setPlansData({
        ...plansData,
        error: true,
      });
      Alert.alert(
        "Error",
        "Ocurrió un error al obtener la información. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const onPressForMe = () => {
    setQuoteType("me");
  };

  const onPressForOther = () => {
    setQuoteType("other");
  };

  const onPressPlan = (item: any) => {
    navigation.navigate("overview" as never);
    setOverviewData({ plan: item, user: userData.data });
  };

  useEffect(() => {
    if (quoteType !== undefined) {
      fetchGetPlans();
    }
  }, [quoteType]);

  return {
    onPressPlan,
    userData: userData.data,
    plansData,
    isForMe,
    isOther,
    selectedQuote,
    onPressForMe,
    onPressForOther,
  };
}
