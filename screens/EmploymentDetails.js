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
import DropDownPicker from "react-native-dropdown-picker";

const EmploymentDetails = ({ navigation }) => {
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
        <Text style={styles.mainHeader}>Employment Details</Text>
      </View>
      <View style={styles.verticalBox}>
        <View style={styles.insideBox}>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Employment Type"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"Office/Business Name"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"Office/Business Address"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"Year of Experience"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={"Salary/Income"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable style={styles.button}>
            <Text style={styles.text}>Upload Payslip</Text>
          </Pressable>

          {/* <TextInput
            style={styles.inputStyle2}
            placeholder={"ID Verification"}
            autoCapitalize="none"
            autoCorrect={false}
          /> */}

          <DropDownPicker
            items={[
              { label: "Item 1", value: "item1" },
              { label: "Item 2", value: "item2", selected: true },
            ]}
            dropDownStyle={{ marginTop: 2 }}
            style={{
              backgroundColor: "rgba(213, 243, 245, 1)",
              borderWidth: 0,
            }}
            placeholderStyle={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 18,
              marginLeft: 30,
            }}
            defaultNull
            placeholder="ID Verification"
            defaultIndex={1}
            defaultValue="item2"
            containerStyle={{
              height: 50,
              marginTop: -30,
              marginBottom: -5,
              width: 260,
              borderWidth: 0,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Pressable style={styles.button1}>
            <Text style={styles.text}>Upload Bank Statement</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Text style={styles.text}>Upload ITR Document</Text>
          </Pressable>
          <Pressable
            style={styles.button3}
            onPress={() => navigation.navigate("CoBorrowersDetails1")}
          >
            <Text style={styles.text}>Proceed</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Group840: {
    position: "absolute",
    bottom: 590,
    right: 215,
    backgroundColor: "rgba(40, 101, 94, 1)",
    width: 263,
    height: 235,
    borderRadius: 135.5,
  },
  button3: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 50,
    marginLeft: 5,
    marginBottom: 10,
  },
  button2: {
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 50,
    marginLeft: 5,
    marginBottom: 10,
  },
  inputStyle2: {
    backgroundColor: "rgba(213, 243, 245, 1)",
    width: 260,
    height: 50,
    marginTop: -30,
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
    marginBottom: 0,
  },
  button1: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 50,
    marginLeft: 5,
    marginBottom: 50,
  },
  inputStyle: {
    backgroundColor: "rgba(213, 243, 245, 1)",
    width: 260,
    height: 50,
    marginTop: 10,
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
    // textTransform: "capitalize",
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
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 260,
    height: 50,
    marginLeft: 5,
    marginBottom: 40,
  },

  text: {
    fontSize: 18,
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

export default EmploymentDetails;
