import React from "react";
import { View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp,condition}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
            <Text style={styles.temp}>{temp}o</Text>
            <Text >{condition}</Text>
            <MaterialCommunityIcons name="weather-rainy" size={32} color="green" />
                
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp: {
        fontSize: 42
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{

    }
})