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

export default function SpecificRequisition({ route, navigation }) {
  // Get the param
  const { itemsData } = route.params;
  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>View Specific Purchase Requisition</Text>

      <ScrollView>
        <View style={styles.singleView}>
          <View>
            <View style={styles.row}>
              <View style={styles.box1}>
                <Text style={styles.textContent}>gs</Text>
              </View>
              <View style={styles.box2}>
                <Text style={styles.textContentData}>ss</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box1}>
              <Text style={styles.textContent}>Status : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.status}</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Site Manager Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Supplier Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.name}</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Site Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.status}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Quantity : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.status}</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Item : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.status}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Notes : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.status}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  textContent: {
    marginTop: 5,
  },
  textContentData: {
    marginTop: 0,
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 160,
  },
  box2: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: 160,
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
    backgroundColor: "#FCE754",
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
});
