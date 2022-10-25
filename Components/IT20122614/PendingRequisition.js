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
const tableData = {
  tableHead: ["ID", "Supplier", "Status"],
  tableData: [
    ["01", "Supun", "Pending"],
    ["02", "Sanduni", "Pending"],
    ["03", "Supun", "Pending"],
    ["04", "Sanduni", "Pending"],
    ["05", "Supun", "Pending"],
    ["06", "Supun", "Pending"],
    ["07", "Sanduni", "Pending"],
    ["08", "Supun", "Pending"],
  ],
};

export default function PendingRequisition() {
  // const renderItem = ({ item }) => <Item title={item.title} />;
  const [data, setData] = useState(tableData);

  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>Add Purchase Requisition</Text>
      <ScrollView style={styles.container}>
        <Table borderStyle={{ backgroundColor: "grey" }}>
          <Row
            data={data.tableHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={data.tableData}
            textStyle={styles.textContent}
            style={styles.bodyContent}
          />
        </Table>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: "left",
    marginLeft: 30,
  },
  bodyContent: {
    backgroundColor: "lightgrey",
    margin: 10,
    borderRadius: 15,
  },
});
