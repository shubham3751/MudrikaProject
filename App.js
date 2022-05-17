import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Eligibility from "./screens/Eligibility";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasicDetails from "./screens/BasicDetails";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Eligibility">
       
          <Stack.Screen name="Eligibility" component={Eligibility} options={{headerShown: false}}/>
          <Stack.Screen name="BasicDetails" component={BasicDetails} options={{headerShown: false}} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

});
