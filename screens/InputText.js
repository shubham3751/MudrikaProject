import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Pressable } from "react-native";

function InputText(props) {
  return (
    <View>
        <TextInput
        style={styles.inputStyle}
        placeholder={props.entry}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles= StyleSheet.create({

    inputStyle: {
        backgroundColor: "rgba(213, 243, 245, 1)",
        width: 260,
        height: 60,
        marginTop: 5,  
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 10,
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        alignItems: 'center',
        marginLeft: 5,
        fontWeight: "bold",
        textAlign: "center",

    },
})

export default InputText