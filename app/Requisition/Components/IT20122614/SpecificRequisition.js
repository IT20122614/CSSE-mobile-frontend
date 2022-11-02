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
const avatarImg = require("../../../../assets/avatarIcon.png");

export default function SpecificRequisition({ route, navigation }) {
  // Get the param
  const { itemsData } = route.params;

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>View Specific Purchase Requisition</Text>

      <ScrollView>
        <View style={styles.singleView}>
          <View>
            <View style={styles.noBackColor}>
              <View style={styles.boxAvatar}>
                <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
              </View>
              <View style={styles.fontSize1}>
                <Text style={styles.fontSize1}>ID : 1</Text>
              </View>
              <View>
                <Text style={styles.fontSize2}>
                  Date: {itemsData.deliveryDate}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box1}>
              <Text style={styles.textContent}>Status : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>Pending</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Site Manager Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>
                {itemsData.siteManagerName}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Supplier Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>
                {itemsData.supplierName}
              </Text>
            </View>
          </View>
          {/* <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Site Name : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.deliveryDate}</Text>
            </View>
          </View> */}
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Quantity : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.quantity}</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Item : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.itemName}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={[styles.textContent]}>Notes : </Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={[styles.textContentData]}>{itemsData.notes}</Text>
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
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 160,
  },
  boxAvatar: {
    paddingLeft: 0,
    paddingTop: 0,
    width: 90,
  },
  box2: {
    backgroundColor: "white",
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
    backgroundColor: "#FCE754",
    marginTop: 10,
    marginBottom: 5,
    padding: 8,
  },
  rowSmall: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FCE754",
    marginTop: 5,
    marginBottom: 5,
    padding: 2,
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
});
