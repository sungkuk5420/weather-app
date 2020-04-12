import React from 'react';
import {Alert, View} from 'react-native';
import Loading from './Loading';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "5c552a851da721b8a4ada0586b055a04";
export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude,longitude)=>{
    const {
      data:{
        main: {temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log(weather[0].main)
    this.setState({isLoading:false,temp,condition:weather[0].main});
  }
  
  getLocation = async()=>{
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status === 'granted') {
          const response = await Location.getPermissionsAsync();
          const {
            coords:{latitude,longitude}
          } = await Location.getCurrentPositionAsync({});
          console.log(latitude,longitude);
          this.getWeather(latitude,longitude);
        }
    } catch (error) {
      Alert.alert(`error!${error}`);
    }
  } 
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading,temp,condition } = this.state;
    return isLoading?<Loading></Loading>:<Weather temp={Math.round(temp)} condition={condition}></Weather>
  } 
} 