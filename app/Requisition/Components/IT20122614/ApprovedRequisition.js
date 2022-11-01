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
  FlatList,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { EvilIcons } from "@expo/vector-icons";

// const Item = ({ title }) => (
//   <View style={[styles.item, {flexDirection: "row"}]}>
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
{
  /* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */
}
// const tableData = {
//   tableHead: ["ID", "Supplier", "Status"],
// };

const DATA = [
  {
    id: "7845441254",
    item: "Supun",
    quantity: "50Kg Cement",
  },
  {
    id: "7845441252",
    item: "Sanduni",
    quantity: "Pending",
  },
  {
    id: "7845441257",
    item: "Supun",
    quantity: "Pending",
  },
  {
    id: "7845441557",
    item: "Supun",
    quantity: "Pending",
  },
  {
    id: "7845441357",
    item: "Supun",
    quantity: "Pending",
  },
  {
    id: "7845481257",
    item: "Supun",
    quantity: "Pending",
  },
];

export default function ApprovedRequisition({ navigation }) {
  // const renderItem = ({ item }) => <Item title={item.title} />;

  //   const [data, setData] = useState(tableData);

  function onPressLearnMore() {
    alert("");
  }
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <View style={[styles.item, backgroundColor]}>
      <View style={styles.row}>
        <View style={[styles.box1]}>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>Reference Number </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>Item </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>Quantity </Text>
          </View>
        </View>
        <View style={[styles.box2]}>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>: {item.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>: {item.item}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.textContent]}>: {item.quantity}</Text>
          </View>
        </View>
        <View style={[styles.box3]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "grey" : "grey";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainSheet}>
      <TextInput
        style={styles.searchBarStyles}
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Search"
      />
      <View>
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={24}
          color="black"
        />
      </View>
      <Text style={styles.headerMain}>Approved Purchased Requisitions</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={styles.flatList}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    padding: 10,
    width: 100,
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: 120,
  },
  box2: {
    padding: 10,
    width: 120,
  },
  box3: {
    padding: 10,
    width: 80,
  },
  headerMain: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f2f2f0",
    borderRadius: 15,
  },
  mainSheet: {
    backgroundColor: "white",
    marginBottom: 60,
    paddingBottom: 20,
  },
  flatList: {
    marginBottom: 60,
  },
  item: {
    backgroundColor: "#f2f2f0",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    paddingLeft: 20,
    borderColor: "#f7d52a",
    borderWidth: 3,
  },
  title: {
    fontSize: 32,
  },
  headStyles: {
    marginLeft: 5,
    marginRight: 20,
  },
  headText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    color: "grey",
    margin: 10,
    marginLeft: 30,
  },
  textContent: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "bold",
  },
  bodyContent: {
    backgroundColor: "lightgrey",
    margin: 10,
    borderRadius: 15,
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
  },
  searchBarStyles: {
    marginLeft: 100,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "gainsboro",
    borderRadius: 20,
    paddingLeft: 40,
    height: 30,
    borderColor: "#f7d219",
  },
  searchIcon: {
    marginTop: -27,
    marginLeft: 340,
  },
});
