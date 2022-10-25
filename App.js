import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "./Components/IT20122614/RegisterPage";
import PendingRequisition from "./Components/IT20122614/PendingRequisition";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="pending-req" component={PendingRequisition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
