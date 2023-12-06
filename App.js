//App 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState, useEffect} from "react";
import {firebase} from './config';

// login page navigators
import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import WriteComplaint from "./src/WriteComplaint";
import VideoComplaint from "./src/VideoComplaint";
import NearestPoliceStation from "./src/NearestPoliceStation";
import VoiceComplaint from "./src/VoiceComplaint";
import ReportOffense from "./src/ReportOffense";
import HelpAndSupport from "./src/HelpAndSupport";
import Notfication from "./src/Notfication";
import Example from "./src/Example";

// admin login page navigators
import AdminLogin from "./Admin/AdminLogin";
import AdminRegister from "./Admin/AdminRegister";
import AdminDashboard from "./Admin/AdminDashboard";
import SendNotfication from "./AdminSrc/SendNotfication";
import GetAudio from "./AdminSrc/GetAudio";
import GetOffense from "./AdminSrc/GetOffense";
import GetText from "./AdminSrc/GetText";
import GetVideo from "./AdminSrc/GetVideo";



const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe on component unmount
  }, []);

  if (initializing) return null;

  return (
    
    <Stack.Navigator>
      {user ? (
        // If user is logged in  navigate to the user dashboard
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              height: 0,
              backgroundColor: '#071e3d',
            },
          }}
        />
      ) : (
        // If user is not logged in or is an admin, navigate to the login/admin login
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="Gaurdy" />,
            headerStyle: {
              height: 0,
              backgroundColor: '#071e3d',
            },
          }}
        />
      )}

      
    <Stack.Screen
        name="WriteComplaint"
        component={WriteComplaint}
        options={{
        headerTitle:() => <Header name="WriteComplaint"/>,
        headerStyle:{
        height:0,
        backgroundColor: '#071e3d',
        }
      }}
    />
    <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerTitle: () => <Header name="Gaurdy" />,
          headerStyle: {
            height: 0,
            backgroundColor: '#071e3d',
          },
        }}
      />
    
    <Stack.Screen
        name="VideoComplaint"
        component={VideoComplaint}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="NearestPoliceStation"
        component={NearestPoliceStation}
        options={{ headerShown: false}}
    />

    <Stack.Screen
        name="VoiceComplaint"
        component={VoiceComplaint}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="ReportOffense"
        component={ReportOffense}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Notfication"
        component={Notfication}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Example"
        component={Example}
        options={{ headerShown: false}}
    />
   
      

      {/* Admin Login Pages are following*/ }


      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{
          headerTitle: () => <Header name="Admin Login" />,
          headerStyle: {
            height: 0,
            backgroundColor: '#071e3d',
          },
        }}
      />

    <Stack.Screen
        name="SendNotfication"
        component={SendNotfication}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="GetAudio"
        component={GetAudio}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="GetVideo"
        component={GetVideo}
        options={{
          headerTitle:() => <Header name="GetVideo"/>,
          headerStyle:{
          height:0,
          backgroundColor: '#071e3d',
          }
        }}
    />
     <Stack.Screen
        name="GetText"
        component={GetText}
        options={{
          headerTitle:() => <Header name="GetText"/>,
          headerStyle:{
          height:0,
          backgroundColor: '#343512',
          }
        }}
    />
     <Stack.Screen
        name="GetOffense"
        component={GetOffense}
        options={{ headerShown: false}}
    />
      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{
          headerTitle: () => <Header name="Admin Dashboard" />,
          headerStyle: {
            height: 0,
            backgroundColor: '#071e3d',
          },
        }}
      />
       <Stack.Screen
        name="AdminRegister"
        component={AdminRegister}
        options={{
          headerTitle: () => <Header name="Admin Login" />,
          headerStyle: {
            height: 0,
            backgroundColor: '#071e3d',
          },
        }}
      />
    </Stack.Navigator>
 
    );
  }
  
export default() => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    
  )
  }
