import { FC } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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

  const exerciseTypeIcon = {
    strength: (
      <MaterialCommunityIcons name="arm-flex" size={24} color={icon.color} />
    ),
    cardio: <FontAwesome name="heartbeat" size={24} color={icon.color} />,
  };

  return (
    <View style={container}>
      <View style={innerContainer}>
        <Text>
          {exerciseTypeIcon[exercise.type as keyof typeof exerciseTypeIcon]}
        </Text>
        <View>
          <Text style={name}>{exercise.name}</Text>
          <Text style={description}>{exercise.description}</Text>
        </View>
      </View>
      <Link href={`/${exercise.name}`}>
        <Feather name="chevron-right" size={24} color={chevronRight.color} />
      </Link>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, fontSize, spacing }) => ({
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
    color: colors.gray[800],
  },
  name: {
    fontSize: fontSize.lg,
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
