import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Eligibility from "./screens/Eligibility";

export default function App() {
  return (
  
       <View style={{backgroundColor: 'rgba(0, 191, 166, 1)', flex: 1 }}>
       <View style={styles.ellipseTop}></View>
       <View style={styles.ellipseBottom}></View>
        <Eligibility/>
        
       </View>
    
       
    
  );
}
const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },

  container: {
    backgroundColor: 'rgba(0, 191, 166, 1)',
  },

  ellipseTop: {
      
    position: 'absolute',
        bottom: 600,
        right: 215,
        backgroundColor: 'rgba(40, 101, 94, 1)', 
        width: 263,
        height: 235,
        borderRadius: 135,

  },

  ellipseBottom: {
        position: 'absolute',
        top: 600,
        left: 215,
        backgroundColor: 'rgba(40, 101, 94, 1)', 
        width: 263,
        height: 235,
        borderRadius: 135,
        
  },
});
