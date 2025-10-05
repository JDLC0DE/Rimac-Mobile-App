import { yupResolver } from "@hookform/resolvers/yup";
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
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState(false);
  const [isAcceptCommercialPolicy, setIsAcceptCommercialPolicy] =
    useState(false);

  const toggleAcceptPrivacyPolicy = () => {
    setIsAcceptPrivacyPolicy((prev) => !prev);
  };

  const toggleAcceptCommercialPolicy = () => {
    setIsAcceptCommercialPolicy((prev) => !prev);
  };

  const onSubmit = (data: any) => console.log(data);

  const onPressSubmit = handleSubmit(onSubmit);

  const isDisabledButton = !(
    isAcceptPrivacyPolicy &&
    isAcceptCommercialPolicy
  );

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
