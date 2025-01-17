import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const TabsLayout = () => {
  const {
    styles: { screenContainerStyle, activeTint, inactiveTint, tabBarStyle },
  } = useStyles(stylesheet);

  return (
    <Tabs
      sceneContainerStyle={screenContainerStyle}
      screenOptions={{
        tabBarActiveTintColor: activeTint.color,
        tabBarInactiveTintColor: inactiveTint.color,
        tabBarStyle: {
          ...tabBarStyle,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
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
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing, rounded }) => ({
  screenContainerStyle: {
    backgroundColor: colors.black,
  },
  activeTint: {
    color: colors.orange[600],
  },
  inactiveTint: {
    color: colors.neutral[500],
  },
  tabBarStyle: {
    borderRadius: rounded["2xl"],
    backgroundColor: colors.neutral[800],
    borderTopColor: colors.neutral[800],
  },
}));

export default TabsLayout;
