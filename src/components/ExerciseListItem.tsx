import { FC } from "react";
import { Text, View } from "react-native";

type ExerciseListItemProps = {
  exercise: any;
  onRemove?: (exercise: any) => void;
};

const ExerciseListItem: FC<ExerciseListItemProps> = ({
  exercise,
}: ExerciseListItemProps) => {
  return (
    <View
      key={exercise.name}
      style={{
        borderTopWidth: 1,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 24 }}>{exercise.icon}</Text>
        <View>
          <Text style={{ fontSize: 18 }}>{exercise.name}</Text>
          <Text>{exercise.description}</Text>
        </View>
      </View>
      <View
        style={{
          height: 24,
          width: 24,
          backgroundColor: "purple",
          borderRadius: 4,
        }}
      />
    </View>
  );
};

export default ExerciseListItem;
