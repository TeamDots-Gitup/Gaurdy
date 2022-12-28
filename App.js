const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import ContactUs from "./screens/ContactUs";
import AdminReportOffense from "./screens/AdminReportOffense";
import AdminVedioComplaint from "./screens/AdminVedioComplaint";
import AdminVoiceComplaint from "./screens/AdminVoiceComplaint";
import AdminComplaint from "./screens/AdminComplaint";
import AdminNotification from "./screens/AdminNotification";
import AdminDashboard from "./screens/AdminDashboard";
import AdminLogIn from "./screens/AdminLogIn";
import LogIn from "./screens/LogIn";
import UserDashboard from "./screens/UserDashboard";
import PasswordReset from "./screens/PasswordReset";
import SignUp from "./screens/SignUp";
import SearchStation from "./screens/SearchStation";
import UserVedioComplaint from "./screens/UserVedioComplaint";
import EmergencySupport from "./screens/EmergencySupport";
import UserVoiceComplaint from "./screens/UserVoiceComplaint";
import HelpAndSupport from "./screens/HelpAndSupport";
import UserAlertParent from "./screens/UserAlertParent";
import UserReportOffence from "./screens/UserReportOffence";
import UserComplaint from "./screens/UserComplaint";
import UserNotification from "./screens/UserNotification";
import TermsAndCondition from "./screens/TermsAndCondition";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    "Source Sans Pro": require("./assets/fonts/Source_Sans_Pro.ttf"),
    "Pontano Sans": require("./assets/fonts/Pontano_Sans.ttf"),
    Lato: require("./assets/fonts/Lato.ttf"),
    Quicksand: require("./assets/fonts/Quicksand.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="ContactUs"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminReportOffense"
              component={AdminReportOffense}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminVedioComplaint"
              component={AdminVedioComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminVoiceComplaint"
              component={AdminVoiceComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminComplaint"
              component={AdminComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminNotification"
              component={AdminNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminDashboard"
              component={AdminDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminLogIn"
              component={AdminLogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserDashboard"
              component={UserDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordReset"
              component={PasswordReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchStation"
              component={SearchStation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserVedioComplaint"
              component={UserVedioComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencySupport"
              component={EmergencySupport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserVoiceComplaint"
              component={UserVoiceComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpAndSupport"
              component={HelpAndSupport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserAlertParent"
              component={UserAlertParent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserReportOffence"
              component={UserReportOffence}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserComplaint"
              component={UserComplaint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserNotification"
              component={UserNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsAndCondition"
              component={TermsAndCondition}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <TermsAndCondition />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
