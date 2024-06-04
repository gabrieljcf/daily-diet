import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { Loading } from "@components/Loading";
// import { Statistics } from "@screens/Statistics";
// import { Register } from "@screens/Register";
// import { Feedback } from "@screens/Feedback";
import { Meal } from "@screens/Meal";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
