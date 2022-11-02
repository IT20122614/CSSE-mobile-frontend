import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PendingRequisition from "../Components/IT20122614/PendingRequisition";
import SpecificRequisition from "../Components/IT20122614/SpecificRequisition";

const Stack = createNativeStackNavigator();

export default function PendingNavigator() {
  return (
    <Stack.Navigator mode="modal">
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
    </Stack.Navigator>
  );
}
