import { FC } from "react";
import { FlatList, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ExerciseListItem } from "@/src/components/ExerciseListItem";
import { Exercise } from "@/types";

type ExerciseListProps = {
  exercises: Exercise[];
};

export const ExerciseList: FC<ExerciseListProps> = ({ exercises }) => {
  const {
    styles: { contentContainer, itemSeparator },
  } = useStyles(stylesheet);

  return (
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseListItem exercise={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={contentContainer}
      ItemSeparatorComponent={() => <View style={itemSeparator} />}
    />
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  contentContainer: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[5],
  },
  itemSeparator: {
    height: spacing[3],
  },
}));
