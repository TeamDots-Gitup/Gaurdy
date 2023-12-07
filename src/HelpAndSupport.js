import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

const ReportOffense = () => {
  const navigation = useNavigation();
  const complaintsRef = firebase.firestore().collection('help&support');
  const [heading, setHeading] = useState('');
  const [textNotification, setTextNotification] = useState('');

  const addField = async () => {
    if (heading && heading.length > 0) {
      try {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        // Add complaint to Firestore with only text
        const data = {
          heading,
          textNotification,
          createdAt: timestamp,
        };

        await complaintsRef.add(data);

        // Clear state and show success message
        setHeading('');
        setTextNotification('');
        Alert.alert("Success", "The admin will you contact soon ");
      } catch (error) {
        Alert.alert('Error submitting help question. Please try again.');
        console.error(error);
      }
    } else {
      Alert.alert("Warning", "Please enter your question before submitting...!");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#071e3d', height: 1500,width:450 }}>
          <View style={{ left:50, width: 350, borderRadius: 20, height:300, top: 50 }}>
            <Text style={{ fontWeight: 'bold', marginTop: 10, color: '#DEC20B', fontSize: 35, textAlign: 'center' }}> Help and Support </Text>
            <View style={{ height: 50, marginTop: 30, left:15, width:350 }}>
              <TextInput
                style={styles.input}
                placeholder={'Heading...!'}
                placeholderTextColor='white'
                onChangeText={(heading) => setHeading(heading)}
                value={heading}
                underlineColorAndroid='transparent'
                autoCapitalize='words'
              />
            </View>
          </View>
          <View style={{ height: 120, width:350,marginTop: -50, marginLeft:35, borderRadius:0}}>
            <TextInput
              style={styles.input2}
              placeholder={'Type your question here...!'}
              placeholderTextColor='white'
              onChangeText={(text) => setTextNotification(text)}
              value={textNotification}
              multiline={true}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
          </View>
          <TouchableOpacity style={styles.button1} onPress={addField}>
            <Text style={styles.B1}>Submit Question</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.buttonText}> </Text>
          </Pressable>
        </View>
        <View style={{top:-1000}}>
        <Text style={styles.heading}>Services Provided by the Police to the Community</Text>
        <Text style={styles.text}> 
        1-1-9 Police Emergency service free of charge to the caller from any location Island wide.
        The emergency service – The Police have in operation strategies to assist the public or any organization encountering adverse 
        situations of any level, which may arise at any unexpected hour disrupting the normal way of life in the society.
        The police emergency center on 1-1-9 operating at Inspector Generals command Information center Mirihana receives all public calls of emergencies and prompt action is taken.
        In case of Emergencies (personal and national cases eg. Disaster and accidents) – Police Emergency Response Crew will be at the doorstep within 15 Minutes (in the city), and 
        in all other out station areas the distance and the terrain would effect the response time in reaching the location but will be quickly as possible.
        </Text>

        <Text style={styles.heading}>Island wide Policing</Text>
        <Text style={styles.text}> 
        The entire Island is covered by 401 Police station, which are at service 24 hrs of the day
        </Text>

        <Text style={styles.heading}>Entertaining complaints of the general public.
        </Text>
        <Text style={styles.text}> 
        The general public could make complains which are entertained and addressed at the earliest. The public has the right to request an acknowledgment of the complaint made.
        </Text>

        <Text style={styles.heading}> Tourist Police
        </Text>
        <Text style={styles.text}> 
        Special Police units apart from the general police duties are assigned to serve tourists in all maters of guidance relief in adverse situations they have co-ordination with the tourist hotels and cover locations of the frequent and lodge.
        </Text>

        <Text style={styles.heading}> Issue of extracts of complaints
        </Text>
        <Text style={styles.text}> 
        The OIC of the Police station issues extracts of complaints made by the public on an application made requesting for the same on payment of Rs.25 .00 per  hundred words each.  An official receipt is issued for the payment.
        These extract of complaints are issued only on the provisions of law
        The extract which the complainant is entitle in a criminal suit is mentioned in the criminal procedure code section 444 (1). In civil maters, extracts of complaints may be issued on request.
        </Text>
        
        <Text style={styles.heading}> Issuing of clearance certificates.
        </Text>
        <Text style={styles.text}> 
        Clearance certificates for applicants seeking visas are issued at a nominal rate of Rs. 500.00 each. An application made from abroad cost Rs.1000.00 each
        Applications could be made through the Police web site online
        Clearance certificates could be collected and the special counter at the Police Headquarters or by post on choice of the applicant as the case may be
        Inquiries relating to Police clearance certificates
        Inquiries could be made from the special unit at the Police headquarters Colombo – 01, by telephone number +9411-2013069, +9411-2013070, +9411-2013071, +9411-2013072  between 0930 hrs to 1530 hrs on any working day
        </Text>

        <Text style={styles.heading}> Issuing of police clearance certificates for employment
        </Text>
        <Text style={styles.text}> 
        The officer in charge of the local police area issues this certificate on a written application made by the applicant on the payment of Rs. 25.00 for which an official receipt is issued.
        </Text>

        <Text style={styles.heading}>  Issue of accident report
        </Text>
        <Text style={styles.text}> 
        The OIC station is duty bound to issue accident report without any undue delay, when insurance co- operation calls for an accident report from the Police to process the claims made by the member of the public. A copy of the first complaint is requested to be attached for the claim
        </Text>

        <Text style={styles.heading}>  Loud Speaker Permits
        </Text>
        <Text style={styles.text}> 
        Permits for the use of loud speakers have to be obtained in terms of section 80 of the Police Ordinance same is issued by any officer of Police of a rank not below the grade of Assistant Superintendent of Police.
        </Text>  

        <Text style={styles.heading}>  Gun / Explosive
        </Text>
        <Text style={styles.text}> 
        Permits have to be obtained from the District Secretary on the recommendation of a Police Officer of a rank not below the grade of Superintendent of Police.
        </Text>

        <Text style={styles.heading}>  Processions
        </Text>
        <Text style={styles.text}> 
        Under the amendment of section 77 (1) of the Police ordinance no procession shall be held in any public place, in any area unless notice in writing of such procession has been given to the OIC at least 6 hours before the commencement of such procession

How the Traffic Division could help the public
Initiate projects to educate and assist the public in all aspects pertaining to road traffic and road users.

Traffic Division could provide
Posters, leaflets, traffic signs and material on prevention of accidents
Organise demonstrations
Lectures
Consultation if they are faced with problems on traffic laws.
Telephone Numbers: +94-11-2431718, +94-11-2345277
How Police Narcotic Bureau could help the Public
Any constructive Information of places deal with drug trafficking or suspicious characters could be given in the following telephone numbers or could call over personally. Such information’s will be treated as confidential information’s.

Telephone Numbers: +94-11-2324626,  +94-11- 2343333, +94-11-2343334,   Fax: +94-11-2440584

        </Text>   
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#071e3d',
  },
  input: {
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: '#29465B',
    paddingLeft: 16,
    flex: 1,
    marginRight:5,
    right:15,
    width: 350,
    top: 10,
    textAlign: 'left',
    color: 'white',
    fontSize:24
  },
  heading:{
    color:'white',
    fontSize:20,
    color:'#DEC20B'
  },
  text:{
    color:'white',
    width:400
  },
  input2: {
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: '#29465B',
    paddingLeft: 16,
    height:150,
    marginRight:5,
    right:-15,
    width: 350,
    top:-30,
    textAlign: 'left',
    color: 'white',
    fontSize:24
  },
  button1: {
    height: 50,
    borderRadius: 15,
    backgroundColor: '#DEC20B',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 100,
  },
  button2: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 200
  },
  B1: {
    fontSize: 22,
  },
  buttonText: {
    color: '#071e3d',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center'
  },
});

export default ReportOffense;
