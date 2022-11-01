import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Avatar } from "@rneui/themed";
import colors from "../../config/colors"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler/";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListItem({
  image,
  IconComponent,
  details,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      {/* <Swipeable renderRightActions={renderRightActions}> */}
      
        <View style={styles.container}>
          {IconComponent}
          {/* {image && <Image style={styles.image} source={image} />} */}
          <Avatar
            size={64}
            rounded
          
          source={{uri:image}}
            containerStyle={{ backgroundColor: "#6733b9" }}
            // source={l.image_url ? { uri: l.image_url } : {}}
            // key={`${chunkIndex}-${i}`}
          />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.text}>Supplier </Text>
              <Text style={styles.text}>Item </Text>
              <Text style={styles.text}>Quantity </Text>
              <Text style={styles.text}>Brand </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.text}>{details.supplier}</Text>
              <Text style={styles.text}>{details.item} </Text>
              <Text style={styles.text}>{details.quantity} </Text>
              <Text style={styles.text}>{details.brand} </Text>
            </View>
        </View>
        <TouchableHighlight onPress={onPress} underlayColor="none">
          <View style={styles.chevron} >
              <MaterialCommunityIcons
                name="chevron-right"
                size={45}
                color="white"
                style={styles.icon}
              />
            <Text style={styles.moreDetails}>More Details</Text>
        </View>
        </TouchableHighlight>
        </View>
      
      {/* </Swipeable> */}
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    margin: 7,
    marginBottom: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    color: colors.mediumGray,
    fontWeight: "500",
  },
  icon: {
    marginLeft: 4,
  },
  chevron: {
    backgroundColor: colors.black,
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 50,
    marginTop: -20,
  },
  moreDetails: {
    fontSize: 12,
    marginLeft: -20,
    marginTop: 10,
  },
});
