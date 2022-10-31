import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveredItemDetailsScreen from "../Screens/DeliveredItemDetailsScreen";
import DeliveredItemListScreen from "../Screens/DeliveredItemListScreen";
import PaymentScreen from "../Screens/PaymentScreen";
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
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}

