import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./app/Retrieve delivered items/Navigation/AppNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
