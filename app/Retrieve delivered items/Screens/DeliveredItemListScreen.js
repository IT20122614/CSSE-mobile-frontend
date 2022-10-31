import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import {getAllDeliveredItems} from "../api/deliveredItems";
import Screen from '../Components/common/Screen'
import ListItem from "../Components/deliveredItems/ListItem";
import colors from "../config/colors";
import routes from "../Navigation/routes";

import axios from "axios";
const initialMessages = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300&vertical=top",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
  {
    id: 2,
    image: "https://www.w3schools.com/howto/img_avatar2.png",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
  {
    id: 3,
    image:
      "file:///data/user/0/host.exp.exponent/cache/ImagePicker/85c25d74-7bef-44f0-b7f5-e489905ef2ad.jpeg",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
  {
    id: 4,
    image:
      "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300&vertical=top",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
  {
    id: 5,
    image: "https://www.w3schools.com/howto/img_avatar2.png",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
  {
    id: 6,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/katara-avatar-the-last-airbender-1590006359.png",
    details: {
      supplier: "P.K Withanage",
      item: "Cement",
      quantity: "50KG Bags 100",
      brand: "INSEE",
    },
  },
];
export default function DeliveredItemListScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const [orders, setOrders] = useState([])

  const getAllOrders = async () => {
    await getAllDeliveredItems().then(({ data }) => {
      setOrders(data);
      console.log(data)

    }).catch((error)=>{console.log(error)})    
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
              image={item.image}
              details={item.details}
              onPress={() => navigation.navigate(routes.ITEM_DETAILS, { item })}
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