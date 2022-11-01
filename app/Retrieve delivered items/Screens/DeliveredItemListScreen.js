import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import {getAllDeliveredItems} from "../api/deliveredItems";
import Screen from '../Components/common/Screen'
import ListItem from "../Components/deliveredItems/ListItem";
import colors from "../config/colors";
import routes from "../Navigation/routes";

export default function DeliveredItemListScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [orders, setOrders] = useState([])
  const [supplier, setSupllier]= useState({})

  const getAllOrders = async () => {
    await getAllDeliveredItems().then(({ data }) => {
      setOrders(data);
      console.log(data)

    }).catch((error) => { console.log(error) })   
    let sup = {
      id: 1,
      name: "P.K Withanage",
      image:
        "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300&vertical=top",
    };
    setSupllier(sup)
  }
  useEffect(() => {
    getAllOrders();
  },[])


  const image =
    "https://thumbs.dreamstime.com/b/man-loading-boxes-van-flat-illustration-courier-delivery-guy-carrying-cardboard-container-packages-parcels-truck-warehouse-159328785.jpg";
  return (
    <Screen>
      <View style={styles.top}>
        <View style={styles.topItems}>
          <View style={{ marginRight: 10 }}>
            <Text style={styles.text}>DELIVERED</Text>
            <Text style={styles.text}> ITEMS</Text>
          </View>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={orders}
          keyExtractor={(message) => message.details.referenceNumber.toString()}
          renderItem={({ item }) => (
            <ListItem
              image={supplier.image}
              details={item.details}
              onPress={() => navigation.navigate(routes.ITEM_DETAILS, { item,supplier})}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setOrders(orders)
          }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  top: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around'
  },
  topItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
  itemList: {
    display: "flex",
    flex: 3.5,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 34,
    fontWeight: "bold",
  },
  image: {
    width: 180,
    height: 150,
  },
});