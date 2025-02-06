import { createStyleSheet, useStyles } from "react-native-unistyles";
import { StyleProp, View, ViewStyle } from "react-native";
import { Text } from "./Text";
import { FC, ReactNode } from "react";
import { colors } from "@/styles";

type PillProps = {
  style?: StyleProp<ViewStyle>;
  theme?: "primary" | "secondary" | "neutral";
  children: ReactNode;
};

export const Pill: FC<PillProps> = ({ style, theme = "primary", children }) => {
  const {
    styles: { pill },
  } = useStyles(stylesheet);

  const themeOptions = {
    primary: {
      textColor: colors.orange[500],
      backgroundColor: colors.orange[950],
      shadowColor: colors.orange[900],
    },
    secondary: {
      textColor: colors.blue[600],
      backgroundColor: colors.blue[950],
      shadowColor: colors.blue[900],
    },
    neutral: {
      textColor: colors.neutral[100],
      backgroundColor: colors.neutral[600],
      shadowColor: colors.neutral[500],
    },
  };

  return (
    <View
      style={[
        pill,
        { backgroundColor: themeOptions[theme].backgroundColor },
        { shadowColor: themeOptions[theme].shadowColor },
        style,
      ]}
    >
      <Text
        size="sm"
        weight="bold"
        style={[
          { textTransform: "capitalize" },
          { color: themeOptions[theme].textColor },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({ spacing, rounded }) => ({
  pill: {
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
}));
