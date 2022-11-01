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
import { Table, Row, Rows } from "react-native-table-component";
import http from "../../../Retrieve delivered items/api/http";
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
};

const DATA = [
  {
    id: "01",
    name: "Supun",
    status: "Pending",
    date: "26-10-2022",
    quantity: 4,
  },
  {
    id: "02",
    name: "Sanduni",
    status: "Pending",
    date: "26-10-2022",
    quantity: 4,
  },
  {
    id: "03",
    name: "Supun",
    status: "Pending",
    date: "26-10-2022",
    quantity: 4,
  },
];

export default function PendingRequisition({ navigation }) {
  // const renderItem = ({ item }) => <Item title={item.title} />;

  const [data, setData] = useState(tableData);

  const [pendingList, setPendingList] = useState([]);

  useEffect(() => {
    function getPendingRequisition() {
      http
        .get(`/requisition/get-pending-orders`)
        .then((result) => {
          console.log(result.data);
          setPendingList(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPendingRequisition();
  }, []);

  function onPressLearnMore() {
    alert("");
  }
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("pending-single", {
          itemsData: item,
        })
      }
      style={[styles.item, backgroundColor]}
    >
      <View style={styles.row}>
        <View style={[styles.box1]}>
          <Text style={[styles.textContent]}>{item.id}</Text>
        </View>
        <View style={[styles.box2]}>
          <Text style={[styles.textContent]}>{item.supplierName}</Text>
        </View>
        <View style={[styles.box3]}>
          <Text style={[styles.textContent]}>Pending</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "grey" : "grey";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        // backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>Add Purchase Requisition</Text>
      {/* <ScrollView style={styles.container}> */}
      <Table borderStyle={{ backgroundColor: "grey" }}>
        <Row
          data={data.tableHead}
          style={styles.headStyles}
          textStyle={styles.headText}
        />
      </Table>

      <FlatList
        data={pendingList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
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
    width: 110,
  },
  box2: {
    padding: 10,
    width: 120,
  },
  box3: {
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
  mainSheet: {
    backgroundColor: "white",
    marginBottom: 60,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "lightgrey",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    paddingLeft: 20,
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
    fontSize: 20,
    textAlign: "left",
  },
  bodyContent: {
    backgroundColor: "lightgrey",
    margin: 10,
    borderRadius: 15,
  },
});
