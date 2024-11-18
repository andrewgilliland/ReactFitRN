import { FC } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

type ExerciseListItemProps = {
  exercise: any;
  onRemove?: (exercise: any) => void;
};

const ExerciseListItem: FC<ExerciseListItemProps> = ({
  exercise,
}: ExerciseListItemProps) => {
  const {
    styles: {
      container,
      innerContainer,
      icon,
      name,
      description,
      chevronRight,
    },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <View style={innerContainer}>
        <Text style={icon}>{exercise.icon}</Text>
        <View>
          <Text style={name}>{exercise.name}</Text>
          <Text style={description}>{exercise.description}</Text>
        </View>
      </View>
      <Link href={"/exercises/[id]"}>
        <Feather
          name="chevron-right"
          size={24}
          color={chevronRight.color}
          onPress={() => console.log("pressed")}
        />
      </Link>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
  container: {
    backgroundColor: colors.gray[50],
    borderTopWidth: spacing[0.5],
    borderColor: colors.gray[200],
    padding: spacing[3],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    gap: spacing[3],
  },
  icon: {
    fontSize: font.size["2xl"],
  },
  name: {
    fontSize: font.size.lg,
    fontWeight: "600",
    color: colors.gray[700],
  },
  description: {
    color: colors.gray[500],
  },
  chevronRight: {
    color: colors.gray[500],
  },
}));

export default ExerciseListItem;
