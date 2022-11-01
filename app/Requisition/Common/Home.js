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
} from "react-native";
const home = require("../Components/assets/home.png");

export default function Home() {
  return (
    <SafeAreaView>
      <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatarImgs: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
});
