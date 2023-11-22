//App 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState, useEffect} from "react";
import {firebase} from './config';


import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import WriteComplaint from "./src/WriteComplaint";
import VideoComplaint from "./src/VideoComplaint";
import NearestPoliceStation from "./src/NearestPoliceStation";
import EmergancySupport from "./src/EmergancySupport";
import VoiceComplaint from "./src/VoiceComplaint";
import ReportOffense from "./src/ReportOffense";
import AlertParents from "./src/AlertParents";
import HelpAndSupport from "./src/HelpAndSupport";
import ContactGaurdy from "./src/ContactGaurdy"
import Notfication from "./src/Notfication";
import Password from "./src/Password";
import ForgotPassword from "./src/ForgotPassword";
import Example from "./src/Example";


const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  

  //handle user state changes
  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  if (initializing) return null;

  if (!user){
    return(
    <Stack.Navigator>
      <Stack.Screen
        name="Gaurdy"
        component={Login}
        options={{
          headerTitle:() => <Header name=""/>,
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
          headerTitle:() => <Header name="Gaurdy"/>,
            headerStyle:{
            height:0,
            backgroundColor: '#071e3d',
            }
           }}
      />
    </Stack.Navigator>
  );
}

  return (
    
    <Stack.Navigator
    initialRouteName="Login">
    

    <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
        headerTitle:() => <Header name="Dashboard"/>,
        headerStyle:{
        height:0,
        backgroundColor: '#071e3d',
        }
      }}
    />
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
      name="ForgotPassword"
      component={ForgotPassword}
      options={{headerShown:false}}
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
        name="EmergancySupport"
        component={EmergancySupport}
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
        name="AlertParents"
        component={AlertParents}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="ContactGaurdy"
        component={ContactGaurdy}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Notfication"
        component={Notfication}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Example"
        component={Example}
        options={{ headerShown: false}}
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