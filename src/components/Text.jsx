import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  errorColor: {
    color: theme.colors.error,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontFamily: {
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main,
    }),
  },
});

const Text = ({ color, fontSize, fontWeight, style, fontFamily, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "error" && styles.errorColor,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    styles.fontFamily,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;