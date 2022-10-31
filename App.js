import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./app/Retrieve delivered items/Components/common/header";
// import RegisterPage from "./Components/IT20122614/RegisterPage";
// import PendingRequisition from "./Components/IT20122614/PendingRequisition";
import MyDrawer from "./app/Retrieve delivered items/Navigation/AppNavigator";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}
