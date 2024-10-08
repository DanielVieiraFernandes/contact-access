import { View, TextInput, ViewProps, TextInputProps } from "react-native";
import React from "react";
import { styles } from "./styles";
import { theme } from "@/theme";

function Input({ children, style }: ViewProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} placeholderTextColor={theme.colors.gray_300} {...rest} />;
}

Input.Field = Field;

export { Input };
