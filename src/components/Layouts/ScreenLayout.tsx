import { ComponentProps, FC, ReactNode } from "react";
import { SafeAreaView, Text, View } from "react-native";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ScreenLayoutProps = {
  title: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  searchValueState: [string, React.Dispatch<React.SetStateAction<string>>];
  children: ReactNode;
};

const ScreenLayout: FC<ScreenLayoutProps> = ({
  title,
  icon,
  children,
  searchValueState,
}) => {
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

const stylesheet = createStyleSheet(({ colors, font, spacing, name }) => ({
  container: {
    backgroundColor: name === "dark" ? colors.black : colors.gray[50],
  },
  headerContainer: {
    paddingHorizontal: spacing[9],
    paddingTop: spacing[6],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenHeading: {
    color: name === "dark" ? colors.white : colors.gray[800],
    fontSize: font.size["2xl"],
    fontWeight: "600",
  },
  headerIcon: {
    color: name === "dark" ? colors.white : colors.gray[800],
  },
  searchInputContainer: {
    borderColor: name === "dark" ? colors.purple[600] : colors.purple[400],
    borderBottomWidth: spacing["0.5"],
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[4],
  },
  searchInputIcon: {
    color: colors.gray[500],
  },
}));

export default ScreenLayout;
