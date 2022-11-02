import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../Components/IT20122614/AddRequisition";
import PendingRequisition from "../Components/IT20122614/PendingRequisition";
import SpecificRequisition from "../Components/IT20122614/SpecificRequisition";
import ApprovedRequisition from "../Components/IT20122614/ApprovedRequisition";
import ApprovedList from "../Components/IT20122614/ApprovedList";
const Stack = createNativeStackNavigator();

export default function RequisitionNavigator() {
  return (
    <Stack.Navigator mode="modal">
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
      <Stack.Screen
        name="pending-single"
        component={SpecificRequisition}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="approveSingle" component={ApprovedList} />
    </Stack.Navigator>
  );
}
