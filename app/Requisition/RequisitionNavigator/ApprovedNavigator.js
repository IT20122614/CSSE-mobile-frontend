import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApprovedRequisition from "../Components/IT20122614/ApprovedRequisition";
import ApprovedList from "../Components/IT20122614/ApprovedList";
const Stack = createNativeStackNavigator();

export default function ApprovedNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Approved"
        component={ApprovedRequisition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="approveSingle"
        component={ApprovedList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
