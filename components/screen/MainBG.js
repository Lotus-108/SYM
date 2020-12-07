import React, {Component} from "react";
import {Dimensions, View} from "react-native";
import EventEmitter from "react-native-eventemitter";
import CustomEvents from "../../models/CustomEvents";
import { Color } from "../../utils/Colors";
import { LinearGradient } from 'expo-linear-gradient';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class MainBG extends Component{

    state = {
        bgOpacity: 0
    };

    componentDidMount() {
        EventEmitter.on(CustomEvents.BG_RATIO_CHANGED,bgOpacity =>{
            this.setState({bgOpacity});
        });
    }

    componentWillUnmount() {

    }

    render() {

        return(
            <LinearGradient
                colors={Color.MAIN_BG_GRADIENT}
                style={{
                width: windowWidth,
                height: windowHeight,
                position: "absolute",
                top: 0,
                left: 0,
                opacity: this.state.bgOpacity
            }} />
        )
    }
}
