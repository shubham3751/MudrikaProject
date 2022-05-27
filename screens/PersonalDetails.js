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
import { ButtonGroup } from "@rneui/themed";
import { useFonts } from "expo-font";

const PersonalDetails = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex1, setSelectedIndex1] = useState(0);

  const firstName = "First Name";
  const middleName = "Middle Name";
  const lastName = "Last Name";
  const alternateAddress = "Alternate Address";
  const email = "Email Address";
  const spouse = "Spouce Name";
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
          <InputText style={styles.inputText} entry={firstName} />
          <InputText style={styles.inputText} entry={middleName} />
          <InputText style={styles.inputText} entry={lastName} />
          <InputText style={styles.inputText} entry={alternateAddress} />
          <InputText style={styles.inputText} entry={email} />
          {/* <InputText style={styles.inputText} entry={spouse} /> */}
          <Text style={styles.description}>Martial Status</Text>
          <ButtonGroup
            buttons={["YES", "NO"]}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            textStyle={{
              fontSize: 17,
              fontWeight: "bold",
            }}
            containerStyle={{
              marginBottom: 2,
              borderRadius: 10,
              height: 55,
              width: 260,
            }}
            buttonStyle={{color: "secondary"}}
          />
          <Text style={styles.description}>
            Is there any other earning member?
          </Text>
          <ButtonGroup
            buttons={["YES", "NO"]}
            selectedIndex={selectedIndex1}
            onPress={(value) => {
              setSelectedIndex1(value);
            }}
            textStyle={{
              fontSize: 17,
              fontWeight: "bold",
            }}
            buttonStyle={styles.button2}
            containerStyle={{
              marginBottom: 20,
              borderRadius: 10,
              height: 55,
              width: 260,
            }}
          />
          <Pressable
            style={styles.button1}
            onPress={() => navigation.navigate("PersonalDetails1")}
          >
            <Text style={styles.text}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    button2: {
    },
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
    marginTop: 10,
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
    marginTop: -5,
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

export default PersonalDetails;
