import Button from "@/src/components/atoms/Button";
import Checkbox from "@/src/components/atoms/Checkbox";
import Input from "@/src/components/atoms/Input";
import InputGroup from "@/src/components/atoms/InputGroup";
import { Colors } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  isAcceptPrivacyPolicy: boolean;
  isAcceptCommercialPolicy: boolean;
  toggleAcceptPrivacyPolicy: () => void;
  toggleAcceptCommercialPolicy: () => void;
};

export default function QuoteFormSection({
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
      <View style={{ gap: 16, marginBottom: 24 }}>
        <InputGroup
          label="Nro. de documento"
          options={[
            { value: "dni", label: "DNI" },
            { value: "ce", label: "CE" },
          ]}
        />
        <Input label="Celular" />
      </View>
      <View style={{ gap: 16, marginBottom: 24 }}>
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
      <Button title="Cotiza aquí" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
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
  }
});
