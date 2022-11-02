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
  FlatList,
} from "react-native";

export default function ApprovedList() {
  return (
    <SafeAreaView style={styles.mainSheet}>
      <View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Reference Number </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: 1</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Item </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: Cement</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Quantity </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: 50Kg</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Brand </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: INSEE</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.rowGrid}>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight}>
                <Text style={styles.textContent}>Brand </Text>
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>: Pending</Text>
              </View>
            </View>
            <Text style={styles.textContent}>Reference Number </Text>
            <Text style={styles.textContent}>Reference Number </Text>
            <Text style={styles.textContent}>Reference Number </Text>
          </View>
          <View style={[styles.column1]}>
            <Text style={[styles.textContentData]}>: Pending</Text>
          </View>
        </View>
        <View style={styles.rowGrid}>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight}>
                <Text style={styles.textContent}>Brand </Text>
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>: Pending</Text>
              </View>
            </View>
            <Text style={styles.textContent}>Reference Number </Text>
            <Text style={styles.textContent}>Reference Number </Text>
            <Text style={styles.textContent}>Reference Number </Text>
          </View>
          <View style={[styles.column1]}>
            <Text style={[styles.textContentData]}>: Pending</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  singleView: {
    backgroundColor: "#D5D5D1",
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
    borderRadius: 15,
  },
  column1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 160,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 10,
  },
  avatarImgs: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  textContent: {
    marginTop: 5,
  },
  textContentData: {
    marginTop: 0,
  },
  columninsight: {
    paddingLeft: 0,
    paddingTop: 5,
    width: 50,
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 120,
  },
  boxAvatar: {
    paddingLeft: 0,
    paddingTop: 0,
    width: 90,
  },
  box2: {
    padding: 10,
    borderRadius: 10,
    width: 160,
  },
  boxNoBackColor: {
    padding: 10,
    width: 40,
  },
  boxNoBackColorDate: {
    padding: 10,
    width: 100,
  },
  headerMain: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  mainSheet: {
    backgroundColor: "white",
    marginBottom: 60,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
  },
  noBackColor: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 5,
    padding: 8,
  },
  row2: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FCC400",
    marginTop: 10,
    marginBottom: 5,
    padding: 8,
  },
  fontSize1: {
    fontSize: 20,
    marginLeft: 0,
  },
  fontSize2: {
    fontSize: 20,
    marginLeft: 20,
  },
  rowGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
  },
});
