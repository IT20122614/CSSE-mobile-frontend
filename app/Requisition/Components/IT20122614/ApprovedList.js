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
  Alert,
} from "react-native";
import avatarImg from "../assets/avatarIcon.png";

export default function ApprovedList({ route, navigation }) {
  const { itemsData } = route.params;

  function saveData() {
    alert("Saved");
  }

  return (
    <SafeAreaView style={styles.mainSheet}>
      <View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Reference Number </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: {itemsData.id}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Item </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: {itemsData.itemName}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Quantity </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>
              : {itemsData.quantity} {itemsData.unitType}
            </Text>
          </View>
        </View>
        {/* <View style={styles.row}>
          <View style={styles.box1}>
            <Text style={styles.textContent}>Brand </Text>
          </View>
          <View style={[styles.box2]}>
            <Text style={[styles.textContentData]}>: {itemsData.unitType}</Text>
          </View>
        </View> */}
      </View>
      <View>
        <View style={styles.rowGrid}>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight2}>
                <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>Supplier ID: 5</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <View style={styles.box1}>
                <Text style={styles.textContent}>Unit Price : Rs.3000</Text>
                <Text style={styles.textContent}>Quantity : 5</Text>
                <Text style={styles.textContent}>
                  Can be delibered : Sep 5 2022
                </Text>
              </View>
              <View style={[styles.box2]}></View>
            </View>
          </View>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight2}>
                <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>Supplier ID: 5</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <View style={styles.box1}>
                <Text style={styles.textContent}>Unit Price : Rs.100</Text>
                <Text style={styles.textContent}>Quantity : 50</Text>
                <Text style={styles.textContent}>
                  Can be delibered : Sep 5 2022
                </Text>
              </View>
              <View style={[styles.box2]}></View>
            </View>
          </View>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight2}>
                <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>Supplier ID: 5</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <View style={styles.box1}>
                <Text style={styles.textContent}>Unit Price : Rs.500</Text>
                <Text style={styles.textContent}>Quantity : 40</Text>
                <Text style={styles.textContent}>
                  Can be delibered : Sep 2 2022
                </Text>
              </View>
              <View style={[styles.box2]}></View>
            </View>
          </View>
          <View style={styles.column1}>
            <View style={styles.row}>
              <View style={styles.columninsight2}>
                <Image source={avatarImg} alt="#" style={styles.avatarImgs} />
              </View>
              <View style={[styles.columninsight]}>
                <Text style={[styles.textContentData]}>Supplier ID: 12</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <View style={styles.box1}>
                <Text style={styles.textContent}>Unit Price : Rs200</Text>
                <Text style={styles.textContent}>Quantity : 20</Text>
                <Text style={styles.textContent}>
                  Can be delibered : Sep 15 2022
                </Text>
              </View>
              <View style={[styles.box2]}></View>
            </View>
          </View>
        </View>
        <View style={[styles.saveBtn]}>
          <TouchableOpacity style={styles.button} onPress={saveData}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
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
  saveBtn: {
    marginLeft: "70%",
  },
  button: {
    backgroundColor: "#f7d52a",
    padding: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    marginTop: 20,
    width: 80,
  },
  column1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 160,
    backgroundColor: "#e1e3e1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  avatarImgs: {
    width: 30,
    height: 30,
    marginLeft: 0,
  },
  textContent: {
    marginTop: 5,
    fontSize: 12,
    marginLeft: 10,
  },
  textContentSizeSmall: {
    fontSize: 12,
  },
  textContentData: {
    marginTop: 0,
  },
  columninsight: {
    paddingLeft: 0,
    paddingTop: 5,
    width: 70,
  },
  columninsight2: {
    paddingLeft: 0,
    paddingTop: 5,
    width: 30,
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
    marginLeft: 10,
  },
  smallBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    backgroundColor: "yellow",
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
