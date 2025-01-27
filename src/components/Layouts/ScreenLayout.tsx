import { ComponentProps, FC, ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ScreenLayoutProps = {
  title: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  searchValueState: [string, React.Dispatch<React.SetStateAction<string>>];
  children: ReactNode;
};

const ScreenLayout: FC<ScreenLayoutProps> = ({
  title,
  children,
  searchValueState,
}) => {
  const {
    styles: { searchInputContainer, childrenContainer },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View>
        <View style={searchInputContainer}>
          <IconInput
            placeholder={`Search ${title}`}
            valueState={searchValueState}
          />
        </View>
      </View>
      <View style={childrenContainer}>{children}</View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(({ colors, fontSize, spacing, name }) => ({
  searchInputContainer: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[4],
  },
  childrenContainer: {},
}));

export default ScreenLayout;
