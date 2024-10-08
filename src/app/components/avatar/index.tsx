import { Image, ImageProps, View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./styles";

const variants = {
  size: {
    medium: {
      width: 54,
      height: 54,
      borderRadius: 18,
    },
    large: {
      width: 100,
      height: 100,
      borderRadius: 32,
    },
  },
  text: {
    medium: {
      fontSize: 24,
    },
    large: {
      fontSize: 52,
    },
  },
};

type Props = {
  name: string
  image?: ImageProps | null
  variant?: "medium" | "large"
  containerStyles?: StyleProp<ViewStyle>
};

export function Avatar({ image, name, variant = "medium", containerStyles }: Props) {
  return (
    <View style={containerStyles}>
      {image ? (
        <Image source={image} style={variants.size[variant]} />
      ) : (
        <View style={[styles.letter, variants.size[variant]]}>
          <Text style={[styles.text, variants.text[variant]]}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}
