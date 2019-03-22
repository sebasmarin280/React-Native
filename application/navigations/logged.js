import React from 'react';
import RestaurantScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";
import DetailRestaurantScreen from "../screens/Restaurants/detailRestaurant";
import EditRestaurantScreen from "../screens/Restaurants/EditRestaurant";
import LogoutScreen from "../screens/Logout";
import ProfileScreen from "../screens/Profile";

import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';


console.disableYellowBox= true;
const navigationOptions={
    navigationOptions:{
        headerStyle:{
            backgraundColor:'black',
        },
        headerStyle:{
            textAlign:'center',
            alignSelf:'center',
            fontSize:20,
            color: '#fff',
            fontWeight: 'bold',
        }
    }
};

const leftIcon =(navigation, icon) => <Icon
    name={icon}
    style={{marginLeft:20, }}
    
    size={20}
    color="red"
    onPress={() => navigation.openDrawer()}
/>;

const rightIcon =(navigation, icon) => <Icon
    name={icon}
    style={{marginLeft:20}}
    size={30}
    color="red"
    onPress={() => navigation.navigate('ListRestaurants')}
/>;

const RestaurantScreenStack = createStackNavigator(
    {
        ListRestaurants:{
            screen: RestaurantScreen,
            navigationOptions:({navigation}) =>({
                title:'Restaurantes',
                headerLeft: leftIcon(navigation, 'bars'),
                
                
            })
        },
        AddRestaurant:{
            screen:AddRestaurantScreen,
            navigationOptions:({navigation})=>({
                title:'Añadir restaurante',
                headerRight:rightIcon(navigation,'home'),
                headerLeft: leftIcon(navigation,'bars')
            })
        },

        DetailRestaurant:{
            screen:DetailRestaurantScreen,
            navigationOptions:({navigation})=>({
                title:'Detalle del restaurante',
                headerRight:rightIcon(navigation,'home'),
                headerLeft: leftIcon(navigation,'bars')
            })
        },
        EditRestaurant:{
            screen: EditRestaurantScreen,
            navigationOptions:({navigation})=> ({
                title:'Editar restaurante',
                headerRight:rightIcon(navigation,'home'),
            })
        },
    },

    
    
    
);
const ProfileScreenStack = createStackNavigator(
    {
        ProfileScreen:{
            screen: ProfileScreen,
            navigationOptions: ({navigation}) =>({
                title:'Perfil',
                headerLeft: leftIcon(navigation,'bars'),
                headerRight: rightIcon(navigation,'home'),
            })
        }
    },
);
const LogoutScreenStack=createStackNavigator({
    LogoutScreen:{
        screen:LogoutScreen,
        navigationOptions: ({navigation})=> ({
            title:'Cerrar sesion',
            
        })
    }
});

export default createDrawerNavigator(
    {
        RestaurantScreen:{
            screen:RestaurantScreenStack,
            navigationOptions:({navigation}) => ({
                drawerLabel:'Restaurantes',
                drawerIcon: ({tintColor}) => (<Icon name="home" size={30} style={{color:tintColor}}/>),
            })
        },
        ProfileScreen:{
            screen:ProfileScreenStack,
            navigationOptions:({navigation}) => ({
                drawerLabel:'Perfil',
                drawerIcon: ({tintColor}) => (<Icon name="user" size={30} style={{color:tintColor}}/>),
            })


        },
        LogoutScreen:{
            screen:LogoutScreenStack,
            navigationOptions:({navigation}) => ({
                drawerLabel:'Cerrar sesion',
                drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={30} style={{color:tintColor}}/>),
            })
        }
    },
    {
        drawerBackgroundColor:'rgba(128, 35, 60, 0.7)',
        contentOptions: {
            activeTintColor:'white',
            activeBackgroundColor:'transparent',
            inactiveTintColor:'white',
            itemsContainerStyle:{
                marginVertical:0,
            }
        },
    }
)