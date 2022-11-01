import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveredItemDetailsScreen from "../Screens/DeliveredItemDetailsScreen";
import DeliveredItemListScreen from "../Screens/DeliveredItemListScreen";
import PaymentScreen from "../Screens/PaymentScreen";

import RegisterPage from "../../Requisition/Components/IT20122614/RegisterPage";
import PendingRequisition from "../../Requisition/Components/IT20122614/PendingRequisition";
import SpecificRequisition from "../../Requisition/Components/IT20122614/SpecificRequisition";
import ApprovedRequisition from "../../Requisition/Components/IT20122614/ApprovedRequisition";
const Stack = createNativeStackNavigator();
export default function DeliveredItemNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Delivered Items List"
        component={DeliveredItemListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delivered Item Details"
        component={DeliveredItemDetailsScreen}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen
        name="Approved"
        component={ApprovedRequisition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pending-req"
        component={PendingRequisition}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="pending-single" component={SpecificRequisition} />
    </Stack.Navigator>
  );
}
