import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import DetailScreen from '../screens/DetailScreen';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
  Details: {userId: string; otherParam: string} | undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
        title: 'Dashboard',
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Details" component={DetailScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
