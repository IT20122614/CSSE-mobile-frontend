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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {DrawerActions} from "@react-navigation/native";
export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.noBackColor}>
        <View>
          <MaterialCommunityIcons name="dots-vertical" color={colors.primary} size={45}  />
        </View>
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
    height: 70,
    width: "100%",
    marginTop: 35,
  },
  mailBox: {
    width: 25,
    height: 25,
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
    width: 90,
  },
  avatarImgs: {
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
    marginLeft: 70,
  },
  profileDiv: {
    alignItems: "flex-end",
  },
});
