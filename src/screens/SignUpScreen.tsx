import React from "react";
import { View } from "react-native";
import SignUpForm from "../components/Forms/SignUpForm";

const SignUpScreen = () => {
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
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;
