import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

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
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState(false);
  const [isAcceptCommercialPolicy, setIsAcceptCommercialPolicy] =
    useState(false);

  const toggleAcceptPrivacyPolicy = () => {
    setIsAcceptPrivacyPolicy((prev) => !prev);
  };

  const toggleAcceptCommercialPolicy = () => {
    setIsAcceptCommercialPolicy((prev) => !prev);
  };

  const onSubmit = (data: IQuoteForm) => {
    console.log(data);
    navigation.navigate("plans" as never);
  };

  const onPressSubmit = handleSubmit(onSubmit);

  const isDisabledButton = !(isAcceptPrivacyPolicy && isAcceptCommercialPolicy);

  return {
    errors,
    control,
    isAcceptPrivacyPolicy,
    isAcceptCommercialPolicy,
    isDisabledButton,
    onPressSubmit,
    toggleAcceptPrivacyPolicy,
    toggleAcceptCommercialPolicy,
  };
}
