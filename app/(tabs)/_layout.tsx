import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/src/style/colors";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.purple[500] }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          headerTitle: "Workouts",
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="dumbbell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          headerTitle: "Exercises",
          title: "Exercises",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={24}
              name="weight-lifter"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
