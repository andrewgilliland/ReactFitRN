import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const TabsLayout = () => {
  const {
    styles: { screenContainerStyle, activeTint, tabBarStyle },
  } = useStyles(stylesheet);

  return (
    <Tabs
      sceneContainerStyle={screenContainerStyle}
      screenOptions={{
        tabBarActiveTintColor: activeTint.color,
        tabBarStyle,
      }}
    >
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

const stylesheet = createStyleSheet(({ colors, name }) => ({
  screenContainerStyle: {
    backgroundColor: name === "dark" ? colors.black : colors.gray[50],
  },
  activeTint: {
    color: name === "dark" ? colors.purple[600] : colors.purple[400],
  },
  tabBarStyle: {
    backgroundColor: name === "dark" ? colors.black : colors.gray[50],
    borderTopColor: colors.purple[500],
    borderTopWidth: 2,
  },
}));

export default TabsLayout;
