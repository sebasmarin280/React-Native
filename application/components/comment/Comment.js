import React,{Component} from 'react';
import {StyleSheet} from  "react-native";
import {Card, Rating} from "react-native-elements";

export default class Comment extends Component{
    render(){
        const{comment} = this.props;
        return(
            <Card title={comment.comment}>
                <Rating
                    style={StyleSheet.rating}
                    imageSize={20}
                    readonly
                    startingValue={comment.rating}
                />
            </Card>
        )
    }
}