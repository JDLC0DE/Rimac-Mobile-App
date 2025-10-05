import { Colors } from "@/src/constants/theme";
import RimacLogo from "@/src/icons/RimacLogo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <RimacLogo />
      <View style={styles.contact}>
        <FontAwesome name="phone" size={20} color={Colors.grey[100]} />
        <Text style={styles.contactText}>(01) 411 6001</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  contactText: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 16,
  }
});
