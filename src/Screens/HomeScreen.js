import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#074757' barStyle="light-content" />
            <View style={styles.container1}>
                <Text style={styles.heading}>USER TRACKING</Text>


               
                

            </View>
        </View>

    );
}

export default HomeScreen;

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
    heading: {
        fontFamily: 'serif',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
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