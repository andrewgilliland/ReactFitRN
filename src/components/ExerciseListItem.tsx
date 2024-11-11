import { FC } from "react";
import { Text, View } from "react-native";
import { spacing } from "../theme";
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

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    backgroundColor: colors.gray[50],
    borderTopWidth: 1,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    gap: spacing.md,
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
    height: 24,
    width: 24,
    backgroundColor: colors.red[600],
    borderRadius: 4,
  },

  //   button: {
  //     backgroundColor: theme.colors.primary[500],
  //     padding: spacing.sm,
  //     borderRadius: rounded.sm,
  //     alignItems: "center",
  //   },
  //   pressed: {
  //     backgroundColor: theme.colors.primary[700],
  //   },
  //   disabled: {
  //     backgroundColor: palette.gray[400],
  //   },
  //   buttonText: {
  //     color: theme.colors.typography,
  //     fontSize: 18,
  //   },
}));

export default ExerciseListItem;
