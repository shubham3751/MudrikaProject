import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Eligibility from "./screens/Eligibility";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasicDetails from "./screens/BasicDetails";
import PersonalDetails from "./screens/PersonalDetails";
import PersonalDetails1 from "./screens/PersonalDetails1";
import KYCDetails1 from "./screens/KYCDetails1";
import KYCDetails2 from "./screens/KYCDetails2";
import KYCDetails3 from "./screens/KYCDetails3"
import CoBorrowersDetails from "./screens/CoBorrowersDetails";
import EmploymentDetails from "./screens/EmploymentDetails";
import CoBorrowersDetails1 from "./screens/CoBorrowersDetails1";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Eligibility">
        <Stack.Screen
          name="Eligibility"
          component={Eligibility}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BasicDetails"
          component={BasicDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalDetails1"
          component={PersonalDetails1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KYCDetails1"
          component={KYCDetails1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KYCDetails2"
          component={KYCDetails2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KYCDetails3"
          component={KYCDetails3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoBorrowersDetails"
          component={CoBorrowersDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmploymentDetails"
          component={EmploymentDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoBorrowersDetails1"
          component={CoBorrowersDetails1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
