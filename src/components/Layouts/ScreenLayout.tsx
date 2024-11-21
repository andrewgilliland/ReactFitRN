import { FC, ReactNode, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ScreenLayoutProps = {
  title: string;
  icon: string;
  children: ReactNode;
};

const ScreenLayout: FC<ScreenLayoutProps> = ({ title, icon, children }) => {
  const searchValueState = useState("");

  const {
    styles: {
      container,
      headerContainer,
      screenHeading,
      headerIcon,
      searchInputContainer,
      searchInputIcon,
    },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <View style={headerContainer}>
          <Text style={screenHeading}>{title}</Text>
          <MaterialCommunityIcons
            size={24}
            name={icon}
            color={headerIcon.color}
          />
        </View>
        <View style={searchInputContainer}>
          <IconInput
            icon={
              <Feather size={18} name="search" color={searchInputIcon.color} />
            }
            placeholder={`Search ${title}`}
            valueState={searchValueState}
          />
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
  container: {
    backgroundColor: colors.gray[50],
  },
  headerContainer: {
    borderWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenHeading: {
    color: colors.gray[800],
    fontSize: font.size["2xl"],
    fontWeight: "600",
  },
  headerIcon: {
    color: colors.gray[800],
  },
  searchInputContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 16,
  },
  searchInputIcon: {
    color: colors.gray[500],
  },
}));

export default ScreenLayout;