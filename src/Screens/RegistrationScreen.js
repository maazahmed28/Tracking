import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function RegistrationScreen(props) {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#074757' barStyle="light-content"/>
            <View style={styles.container1}>
                <Text style={styles.text}>USER TRACKING</Text>


                <View style={styles.inputSize}>
                    <View style={{paddingRight:8}}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    </View>
                    

                

                    <TextInput
                        placeholder="Enter Your Name"
                        placeholderTextColor="#666666"
                        style={styles.txtInput}
                        autoCapitalize="none"
                        

                    />
                </View>

                <View style={styles.inputSize}>
                    <View style={{paddingRight:5}}>
                    <MaterialCommunityIcons
                        name="email-outline"
                        color="#05375a"
                        size={20}
                    />
                    </View>
                    

                

                    <TextInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="#666666"
                        style={styles.txtInput}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        

                    />
                </View>



                <View style={styles.inputSize}>
                <View style={{paddingRight:5}}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    </View>

                    <TextInput
                        placeholder="Enter Your Password"
                        placeholderTextColor="#666666"
                        style={styles.txtInput}
                        autoCapitalize="none"
                        
                    />
                    
                    <TouchableOpacity>
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />

                    </TouchableOpacity>
                </View>
               

                <View style={styles.button}>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Home")}
                    style={[styles.signIn, {
                        borderColor: '#074757',
                        borderWidth: 1,
                        marginTop: 15,
                        backgroundColor:'#009387'
                    }]}
                >
                
                    <Text style={[styles.txtSign, {
                        color:'black'
                    }]}>Sign Up</Text>
                
                </TouchableOpacity>
             
{/* 
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Registration")}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.txtSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity> */}
            </View>

            </View>
        </View>

    );
}
  export default RegistrationScreen;


  const styles = StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#1D5968',
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 25,

    },
    text: {
        fontFamily: 'serif',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black'
    },
    txtInput: {
      flex: 1,
      marginTop: -12,    
      paddingLeft: 10,
      color: '#05375a',
  },
  inputSize: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom:10,
      borderBottomWidth: 2,
      borderBottomColor: '#074757',
      padding: 5
  },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txtSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
        
    }
});