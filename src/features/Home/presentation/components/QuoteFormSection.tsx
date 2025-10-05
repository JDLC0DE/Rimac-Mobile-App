import Button from "@/src/components/atoms/Button";
import Checkbox from "@/src/components/atoms/Checkbox";
import Input from "@/src/components/atoms/Input";
import InputGroup from "@/src/components/atoms/InputGroup";
import { DOCUMENT_TYPES } from "@/src/constants/globals";
import { Colors } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  control: any;
  errors: any;
  isDisabledButton: boolean;
  onPressSubmit: () => void;
  isAcceptPrivacyPolicy: boolean;
  isAcceptCommercialPolicy: boolean;
  toggleAcceptPrivacyPolicy: () => void;
  toggleAcceptCommercialPolicy: () => void;
};

export default function QuoteFormSection({
  control,
  errors,
  onPressSubmit,
  isDisabledButton,
  isAcceptPrivacyPolicy,
  isAcceptCommercialPolicy,
  toggleAcceptPrivacyPolicy,
  toggleAcceptCommercialPolicy,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </Text>
      <View style={styles.inputContainer}>
        <InputGroup
          errors={errors}
          control={control}
          name="document"
          rules={{ required: true }}
          label="Nro. de documento"
          options={DOCUMENT_TYPES}
        />
        <Input
          errors={errors}
          control={control}
          name="phone"
          rules={{ required: true }}
          label="Celular"
        />
      </View>
      <View style={styles.inputContainer}>
        <Checkbox
          label="Acepto la Política de Privacidad"
          checked={isAcceptPrivacyPolicy}
          onPress={toggleAcceptPrivacyPolicy}
        />
        <Checkbox
          label="Acepto la Política Comunicaciones Comerciales"
          checked={isAcceptCommercialPolicy}
          onPress={toggleAcceptCommercialPolicy}
        />
        <Text style={styles.terms}>Aplican Términos y Condiciones.</Text>
      </View>
      <Button
        title="Cotiza aquí"
        onPress={onPressSubmit}
        disabled={isDisabledButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  inputContainer: { gap: 16, marginBottom: 24 },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 24,
  },
  terms: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.text,
    textDecorationLine: "underline",
  },
});
