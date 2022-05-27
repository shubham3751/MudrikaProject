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
} from "react-native";
import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import { useFonts } from "expo-font";
import axios from "axios";

function Eligibility({ navigation }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  // if (!loaded) {
  //   return null;
  // }

  const [aadharNum, setaadharNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [panNum, setpanNum] = useState("");

  // const phone = "Phone Number";
  // const pan = "Pan Number";
  // const aadhar = "Aadhaar Number";
  // const otp = "_ _ _ _ _ _";

  const sendCred = async() => {
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3001",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //   }
    // })
    // .then(function (response) {
    //     console.log("response", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log("error", error);
    //   })

    // await axios
    //   .get('http://localhost:3001')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error.response.data);
    //     console.log("error", error);
    //   });

     const url = 'http://localhost:3001'
      fetch(url,{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
       },
       body: JSON.stringify()
      }).then(response => {
        console.log("data sent")
      }).catch(err => {
        console.log(err)
      })

  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.Group840}></View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qkctovngiom-175%3A9?alt=media&token=a09954de-cb61-4437-a991-896db8a2769e",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.EllipseTop} /> */}
      <View style={styles.EllipseBottom} />

      <View>
        <Text style={styles.mainHeader}> Information</Text>
      </View>

      <View style={styles.verticalBox}>
        <View style={styles.insideBox}>
          {/* <InputText entry={phone} /> */}
          <TextInput
            keyboardType={"numeric"}
            maxLength={10}
            style={styles.inputStyle}
            placeholder={"Phone Number"}
            value={phoneNum}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPhoneNum(text)}
          />
          <Text style={styles.description}>
            Kindly enter phone number as menti- oned in Aadhaar Card.
          </Text>
          {/* <InputText entry={pan} /> */}
          <TextInput
            maxLength={10}
            keyboardType={"numeric"}
            style={styles.inputStyle}
            placeholder={"Pan Number"}
            value={panNum}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setpanNum(text)}
          />
          {/* <InputText entry={aadhar}/> */}
          <TextInput
            keyboardType={"numeric"}
            maxLength={12}
            style={styles.inputStyle}
            placeholder={"Aadhaar Number"}
            value={aadharNum}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setaadharNum(text)}
          />

          <Pressable style={styles.button} onPress={sendCred}>
            <Text style={styles.text}>Get OTP</Text>
          </Pressable>

          {/* <InputText entry={otp} /> */}
          <TextInput
            keyboardType={"numeric"}
            maxLength={6}
            style={styles.inputStyle}
            placeholder={"_ _ _ _ _ _"}
            autoCapitalize="none"
            autoCorrect={false}
            // onChangeText = {(text) => props.onChangeText(text,props.field)}
          />
          <View style={styles.container}>
            <Text style={styles.timerStyle}> 00:14 secs</Text>

            <Pressable style={styles.button2} onPress={sendCred}>
              <Text style={styles.resendStyle}>Resend OTP</Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.button1}
            onPress={() => navigation.navigate("BasicDetails")}
          >
            <Text style={styles.text}>Proceed</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

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
    fontSize: 20,
    alignItems: "center",
    marginLeft: 5,
    fontWeight: "bold",
    textAlign: "center",
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
    marginTop: 90,
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
});

export default Eligibility;
