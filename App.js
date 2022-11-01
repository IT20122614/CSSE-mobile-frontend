import { NavigationContainer } from "@react-navigation/native";
import Header from "./app/Retrieve delivered items/Components/common/header";
import MyDrawer from "./app/Retrieve delivered items/Navigation/AppNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <MyDrawer />
    </NavigationContainer>
  );
}
