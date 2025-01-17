import { FC } from "react";
import { ScrollView } from "react-native";
import "@/src/styles/unistyles";
import ExerciseListItem from "@/src/components/ExerciseListItem";

type ExerciseListProps = {
  exercises: any[];
};

const ExerciseList: FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 80 }} // Adjust paddingBottom to account for tab navigator
      style={{ paddingHorizontal: 24 }}
    >
      {exercises.map((exercise, index) => (
        <ExerciseListItem key={index} exercise={exercise} />
      ))}
    </ScrollView>
  );
};

export default ExerciseList;
