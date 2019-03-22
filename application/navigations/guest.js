import React from 'react';
import {createStackNavigator} from "react-navigation"
import StartScreen from "../screens/start";
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';

export default createStackNavigator(
    {
        Start: {
            screen: StartScreen
        },
        Login:{
            screen:LoginScreen
        },
        Register:{
            screen:RegisterScreen
        }
    },
    {
        initialRoutName:'Start',
        navigationOptions:{
            headerStyle:{
                backgroundColor: '#f4511e'
            },
            headerTitleStyle:{
                textAlign: 'center',
                alignSelf:'center',
                fontSize:20,
                color:'#fff',
                fontWeight:'bold'
            }
        }
    }
)