import { FC } from "react";
import { ScrollView } from "react-native";
import "@/src/style/unistyles";
import ExerciseListItem from "@/src/components/ExerciseListItem";

type ExerciseListProps = {
  exercises: any[];
};

const ExerciseList: FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <ScrollView style={{ paddingHorizontal: 24 }}>
      {exercises.map((exercise, index) => (
        <ExerciseListItem key={index} exercise={exercise} />
      ))}
    </ScrollView>
  );
};

export default ExerciseList;
