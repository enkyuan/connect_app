import "@/app/gesture-handler.native";

import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "@/app/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
