import { createDrawerNavigator } from "@react-navigation/drawer";
import AppDatePicker from "../Components/common/datePicker";
import PendingRequisition from './../../aa/Components/IT20122614/PendingRequisition';
import RegisterPage from './../../aa/Components/IT20122614/RegisterPage';
import DeliveredItemNavigator from "./DeliveredItemNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

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
        name="Deliverd Items"
        component={DeliveredItemNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="truck" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="Feed" component={PendingRequisition} />
      <Drawer.Screen name="Article" component={RegisterPage} />
    </Drawer.Navigator>
  );
}
