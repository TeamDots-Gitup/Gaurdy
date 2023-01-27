//Login
import { View, Text, TouchableOpacity, TextInput,StyleSheet, Image } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { CheckBox } from 'react-native-elements'



const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    loginUser = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch (error){
            alert(error.message)
        }
    }
    //forget the password
        const forgetPassword = () => {
            firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
              alert("Password reset email sent")
            }).catch((error) => {
              alert(error)
            })
            }
    const [rememberME,setRememberMe] = useState(false);
    const clickme =[]
    const click =()  => {
        if (rememberME==true){
            clickme.push("rememberMe")
        }
    }


    return ( 
        <View style = {styles.container}>
            <Image 
            style={styles.gaurdy}
            resizeMode="cover"
            source={require("../assets/gaurdy.png")}
            />
           
            <View style={{marginTop:40}}>
                <View style={styles.cont1}>
                <TextInput
                    style={styles.email}
                    placeholder='dom@gmail.com'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    placeholderTextColor={'white'}
            
                />
                <TextInput
                    style={styles.password}
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor={'white'}
                />
                <TouchableOpacity
                    onPress={() => loginUser(email,password)}
                    style={styles.button}
                >
                    <Text style={{fontWeight:'bold', fontSize:22, left:0}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Registration')}
                    style={{marginTop:20}}
                >
                    <Text style={{left:160,fontWeight:'bold', fontSize:16, color:'white', top:10, left:150}}>
                        New User?  Signup
                    </Text>
                </TouchableOpacity>
                <Text style={styles.ocw}>
                     --------------        or continue with       --------------
                </Text>
                <Image 
                    style={[styles.icon]}
                    resizeMode="cover"
                    source = {require("../assets/abcd.png")}/>
                <TouchableOpacity
                    onPress={() => {forgetPassword()}}
                    style={{marginTop:10}}
                >
                    <Text style={{left:270,fontWeight:'bold', fontSize:16, color:'yellow', top:-410}}>
                        Forget Password?
                    </Text>
                   
                </TouchableOpacity> 
                
                
            </View>
            <Text style={{marginTop:30, left:45, fontSize:16, top:-420, color:'yellow', width:10}}>
                  <CheckBox style={{fontColor:'yellow', borderColor:'red'}}  color='red' checked={rememberME} checkedTitle='I am in' onPress={()=> setRememberMe(!rememberME)} >
                </CheckBox>
            </Text> 
            <Text style={{marginTop:20, left:90, fontSize:16, top:-470, color:'white',width:100}}>Remember Me</Text>
            </View>
           
        </View>
    )
    
}

export default Login

const styles = StyleSheet.create({
    cont1:{
        top:50
    },
    container:{
        backgroundColor:'#071e3d',
        paddingTop:200
    },
    email:{
        height:50,
        fontSize:20,
        top:-220,
        left:45,
        width: 330,
        color:'yellow',
        lineHeight:20,
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 6,
        textAlign:'left',
        backgroundColor:"#29465B"
    },

    password:{
        height:50,
        fontSize:20,
        top:-210,
        left:45,
        width: 330,
        color:'yellow',
        lineHeight:20,
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 6,
        backgroundColor:"#29465B"
    },


    button :{
        marginTop:50,
        height:70,
        width:330,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        left:45,
        top:-200
    },

    gaurdy:{
        top:-150,
        left:100,
        width:200,
        height:200
    },
    
    icon:{
        top:-720,
        left:340,
        height:30,
        width:30
    },
    ocw:{
        top:-200,
        left:90,
        color:'yellow'
    },
    

})
