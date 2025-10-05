import { useState } from "react";

export default function useHomeInteractor() {
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState(false);
  const [isAcceptCommercialPolicy, setIsAcceptCommercialPolicy] =
    useState(false);

  const toggleAcceptPrivacyPolicy = () => {
    setIsAcceptPrivacyPolicy((prev) => !prev);
  };

  const toggleAcceptCommercialPolicy = () => {
    setIsAcceptCommercialPolicy((prev) => !prev);
  };
  return {
    isAcceptPrivacyPolicy,
    isAcceptCommercialPolicy,
    toggleAcceptPrivacyPolicy,
    toggleAcceptCommercialPolicy,
  };
}
