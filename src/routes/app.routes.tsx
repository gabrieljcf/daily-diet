import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/FeedBack";
import { Home } from "@screens/Home";
import { Details } from "@screens/Details";
import { Register } from "@screens/New";
import { Statistics } from "@screens/Statistics";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={Register} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal" component={Details} />
    </Navigator>
  );
}
