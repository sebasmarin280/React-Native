import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";

export default class CommentEmpty extends Component{
    render(){
        return(
            <View>
                <Text style={styles.commentEmptyText}>
                    Se el primero en opinar 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentEmpty:{
        justifyContent:'center',
        flex: 1,
        marginTop:10,
        marginBottom:10
    },
    commentEmptyText:{
        backgroundColor: 'rgba(10, 255, 10, 0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }
});