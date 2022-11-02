import { mdiBlackMesa } from "@mdi/js";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";
const home = require("../Components/assets/home.png");

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground style={styles.coverImage} source={home}>
          <View style={styles.textView}>
            {/* <Text style={styles.imageText}>HAPPY MARRIED LIFE</Text> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Deliverd Items")}
            >
              <Text style={styles.buttonText}>Get Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatarImgs: {
    width: 400,
    height: 720,
    flex: 1,
  },
  getStartBtn: {
    paddingTop: -100,
  },
  container: {
    flex: 1,
  },
  coverImage: {
    width: "100%",
    height: 700,
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  btnStyles: {
    color: mdiBlackMesa,
  },
  button: {
    backgroundColor: "#f7d320",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    marginTop: 20,
    width: 150,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
