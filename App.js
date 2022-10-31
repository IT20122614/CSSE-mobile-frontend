import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./app/Retrieve delivered items/Components/common/header";
// import RegisterPage from "./Components/IT20122614/RegisterPage";
// import PendingRequisition from "./Components/IT20122614/PendingRequisition";
import MyDrawer from "./app/Retrieve delivered items/Navigation/AppNavigator";
import RegisterPage from "./app/Requisition/Components/IT20122614/RegisterPage";
import PendingRequisition from "./app/Requisition/Components/IT20122614/PendingRequisition";
import SpecificRequisition from "./app/Requisition/Components/IT20122614/SpecificRequisition";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <MyDrawer />
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="pending-req" component={PendingRequisition} />
        <Stack.Screen name="pending-single" component={SpecificRequisition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
