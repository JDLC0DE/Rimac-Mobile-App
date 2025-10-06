import { useUser } from "@/src/context/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import * as Yup from "yup";
import GetUserUseCase from "../application/getUser.useCase";

interface IQuoteForm {
  document: string;
  phone: string;
}

const schema = Yup.object<IQuoteForm>()
  .shape({
    document: Yup.string().required("Este campo es requerido."),
    phone: Yup.string().required("Este campo es requerido."),
  })
  .required();

export default function useHomeInteractor() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuoteForm>({
    defaultValues: {
      document: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const { userData, setUserData } = useUser();
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState(false);
  const [isAcceptCommercialPolicy, setIsAcceptCommercialPolicy] =
    useState(false);

  const fecthGetUser = async (data: IQuoteForm) => {
    try {
      setUserData({
        ...userData,
        isLoading: true,
      });
      const getEnterprisesResponse = await GetUserUseCase.execute();
      setUserData({
        ...userData,
        data: {
          ...getEnterprisesResponse,
          ...data,
        },
        isLoading: false,
      });
      navigation.navigate("plans" as never);
    } catch (error) {
      setUserData({
        ...userData,
        error: true,
      });
      Alert.alert(
        "Error",
        "Ocurrió un error al obtener la información. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const toggleAcceptPrivacyPolicy = () => {
    setIsAcceptPrivacyPolicy((prev) => !prev);
  };

  const toggleAcceptCommercialPolicy = () => {
    setIsAcceptCommercialPolicy((prev) => !prev);
  };

  const onPressSubmit = handleSubmit(fecthGetUser);

  const isDisabledButton =
    !(isAcceptPrivacyPolicy && isAcceptCommercialPolicy) || userData.isLoading;

  return {
    errors,
    control,
    userData,
    isAcceptPrivacyPolicy,
    isAcceptCommercialPolicy,
    isDisabledButton,
    onPressSubmit,
    toggleAcceptPrivacyPolicy,
    toggleAcceptCommercialPolicy,
  };
}
