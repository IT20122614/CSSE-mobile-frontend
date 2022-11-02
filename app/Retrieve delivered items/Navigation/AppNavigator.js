import { createDrawerNavigator } from "@react-navigation/drawer";
import DeliveredItemNavigator from "./DeliveredItemNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../Requisition/Common/Home";

import RegisterPage from "../../Requisition/Components/IT20122614/AddRequisition";
import PendingRequisition from "../../Requisition/Components/IT20122614/PendingRequisition";
import SpecificRequisition from "../../Requisition/Components/IT20122614/SpecificRequisition";
import ApprovedRequisition from "../../Requisition/Components/IT20122614/ApprovedRequisition";
import ApprovedList from "../../Requisition/Components/IT20122614/ApprovedList";
import ApprovedNavigator from "../../Requisition/RequisitionNavigator/ApprovedNavigator";
import PendingNavigator from "../../Requisition/RequisitionNavigator/PendingNavigator";
import RequisitionNavigator from "../../Requisition/RequisitionNavigator/RequisitionNavigator";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.primary,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
      }}
      drawerContentOptions={{
        activeTintColor: colors.black,
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
        labelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={PendingRequisition}
        options={{
          drawerIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add PR"
        component={RequisitionNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-box-multiple"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pending PR"
        component={PendingNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="timer-sand"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Approved PR"
        component={ApprovedNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="file-check"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Deliverd Items"
        component={DeliveredItemNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="truck" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About us"
        component={RegisterPage}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="globe-sharp" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact us"
        component={RegisterPage}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="file-phone"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={RegisterPage}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
