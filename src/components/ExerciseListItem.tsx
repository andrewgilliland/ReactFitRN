import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text } from "./Text";
import { FC } from "react";
import { Exercise } from "@/types";
import { Link } from "expo-router";

type ExerciseListItemProps = {
  exercise: Exercise;
};

export const ExerciseListItem: FC<ExerciseListItemProps> = ({ exercise }) => {
  const {
    styles: { container, link, difficultyContainer, difficultyIcon },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <View>
        <Text size="lg" weight="semibold" color="neutral.100" key={exercise.id}>
          {exercise.name}
        </Text>
        <View style={difficultyContainer}>
          <FontAwesome5
            name="star"
            size={difficultyIcon.height}
            color={difficultyIcon.color}
          />
          <FontAwesome5 name="star" size={24} color={difficultyIcon.color} />
          <FontAwesome5 name="star" size={24} color={difficultyIcon.color} />
        </View>
      </View>
      <View style={link}>
        <Link href={`/exercises/${exercise.id}`}>
          <Text weight="bold">{`>`}</Text>
        </Link>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(
  ({ colors, fontSize, spacing, rounded }) => ({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.neutral[800],
      padding: spacing[5],
      borderRadius: rounded["2xl"],
      shadowColor: colors.neutral[900],
      shadowOffset: {
        width: spacing[1],
        height: spacing[1],
      },
      shadowOpacity: 1,
      shadowRadius: 0,
    },
    link: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.orange[600],
      height: spacing[12],
      width: spacing[12],
      borderRadius: rounded.xl,
      shadowColor: colors.neutral[100],
      shadowOffset: {
        width: spacing["0.5"],
        height: spacing["0.5"],
      },
      shadowOpacity: 1,
      shadowRadius: 0,
    },
    difficultyContainer: {
      marginTop: spacing[1],
      flexDirection: "row",
      gap: spacing[1],
    },
    difficultyIcon: {
      color: colors.blue[700],
      height: spacing[6],
    },
  })
);
