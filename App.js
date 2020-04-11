import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class extends React.Component {
  
  getLocation = async()=>{
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status === 'granted') {
          const response = await Location.getPermissionsAsync();
          const location = await Location.getCurrentPositionAsync({});
          console.log(location);
         }
    } catch (error) {
      Alert.alert(`error!${error}`);
    }
  } 
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading></Loading>
  } 
} 