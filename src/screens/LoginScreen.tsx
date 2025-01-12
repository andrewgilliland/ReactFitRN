import React from "react";
import LoginForm from "../components/LoginForm";
import { Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 132,
        justifyContent: "center",
      }}
    >
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
