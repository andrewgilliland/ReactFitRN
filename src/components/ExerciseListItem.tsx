import { FC } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

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
      <View style={chevronRight} />
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing, rounded }) => ({
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
    fontSize: 24,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[700],
  },
  description: {
    color: colors.gray[500],
  },
  chevronRight: {
    height: spacing[6],
    width: spacing[6],
    backgroundColor: colors.red[600],
    borderRadius: rounded.md,
  },
}));

export default ExerciseListItem;
