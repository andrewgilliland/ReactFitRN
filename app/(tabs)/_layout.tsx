import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="exercises"
        options={{ headerTitle: "Exercises", title: "Exercises" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
