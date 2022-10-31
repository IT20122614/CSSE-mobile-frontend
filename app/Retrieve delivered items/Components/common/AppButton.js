import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function AppButton({ title, onPress, style, fontSize,icon }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, { fontSize: fontSize }]}>{title}</Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent:"center",
    width: "100%",
    flexDirection:"row"
  },
  text: {
    color: colors.black,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
