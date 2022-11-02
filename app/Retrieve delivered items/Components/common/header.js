import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";
import { statusBarHeight } from "expo-constants";
import { FadeInRight } from "react-native-reanimated";
const logoImg = require("../../../Requisition/Components/assets/logoP.png");
const avatarImg = require("../../../Requisition/Components/assets/profileimg.png");
const bellIcon = require("../../../Requisition/Components/assets/bellIcon.png");
const mailBox = require("../../../Requisition/Components/assets/mailBox.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.noBackColor}>
        <View style={styles.boxAvatar}>
          <Image source={logoImg} alt="#" style={styles.avatarImgs} />
        </View>
        <View style={styles.fontSize1}>
          <Image source={mailBox} alt="#" style={styles.mailBox} />
        </View>
        <View style={styles.profileDiv}>
          <Image source={bellIcon} alt="#" style={styles.mailBox} />
        </View>
        <View style={styles.profileDiv}>
          <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    height: 60,
    width: "100%",
    marginTop: 40,
  },
  mailBox: {
    width: 20,
    height: 20,
    marginLeft: 20,
    float: "right",
    marginTop: 10,
  },
  noBackColor: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 5,
    padding: 8,
  },
  boxAvatar: {
    paddingLeft: 0,
    paddingTop: 0,
    width: 90,
  },
  avatarImgs: {
    width: 70,
    height: 70,
    marginLeft: 20,
    float: "right",
  },
  avatarImgs: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  fontSize2: {
    fontSize: 20,
    marginLeft: 20,
  },
  fontSize1: {
    fontSize: 20,
    marginLeft: 100,
  },
  profileDiv: {
    alignItems: "flex-end",
  },
});
