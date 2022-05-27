import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Pressable,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputText from "./InputText";

const PersonalDetails1 = ({ navigation }) => {
  const relation = "Relation with co-borrower";
  const otp = "_ _ _ _ _ _";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.Group840}></View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("WEEWEE");
        }}
      >
        <Image
          style={styles.Vector}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qkctovngiom-175%3A9?alt=media&token=a09954de-cb61-4437-a991-896db8a2769e",
          }}
        />
      </TouchableOpacity>
      <View style={styles.EllipseBottom} />
      <View>
        <Text style={styles.mainHeader}>Personal Details</Text>
      </View>
      <View style={styles.verticalBox}>
        <View style={styles.insideBox}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Relation with co-borrower"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"_ _ _ _ _ _"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.container}>
            <Text style={styles.timerStyle}> 00:14 secs</Text>

            <Pressable style={styles.button2}>
              <Text style={styles.resendStyle}>Resend OTP</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Get OTP</Text>
          </Pressable>
          <Pressable
            style={styles.button1}
            onPress={() => navigation.navigate("KYCDetails1")}
          >
            <Text style={styles.text}>Proceed</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "",
    fontSize: 18,
    alignItems: "center",
    marginLeft: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  button2: {},
  Group840: {
    position: "absolute",
    bottom: 590,
    right: 215,
    backgroundColor: "rgba(40, 101, 94, 1)",
    width: 263,
    height: 235,
    borderRadius: 135.5,
  },
  Vector: {
    width: 25,
    height: 15,
    top: 32,
  },

  // EllipseTop: {
  //   position: "absolute",
  //   bottom: 600,
  //   right: 215,
  //   backgroundColor: "rgba(40, 101, 94, 1)",
  //   width: 263,
  //   height: 235,
  //   borderRadius: 135.5,
  // },

  EllipseBottom: {
    position: "absolute",
    top: 600,
    left: 215,
    backgroundColor: "rgba(40,101,94,1)",
    width: 263,
    height: 235,
    borderRadius: 131.5,
  },

  insideBox: {
    alignItems: "center",
  },

  verticalBox: {
    position: "absolute",
    top: 95,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 300,
    height: 630,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 5,
  },

  flex_hcenter: {
    justifyContent: "center",
  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "rgba(0, 191, 166, 1)",
  },

  mainHeader: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: "capitalize",
    top: -10,
  },

  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },

  description: {
    fontSize: 15.2,
    marginTop: 5,
    fontFamily: "",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 1)",
    marginBottom: 8,
    marginLeft: 18,
    width: 270,
  },

  button: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 60,
    marginLeft: 5,
  },

  button1: {
    marginTop: 210,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 60,
    marginLeft: 5,
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  container: {
    width: 278,
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  timerStyle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },

  resendStyle: {
    textAlign: "right",
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    fontFamily: "",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    marginBottom: 4,
    width: 270,
  },
});

export default PersonalDetails1;
