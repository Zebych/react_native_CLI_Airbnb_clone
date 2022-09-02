import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarActiveTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto color={color} name={'search'} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome color={color} name={'heart-o'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 color={color} name={'airbnb'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather color={color} name={'message-square'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons color={color} name={'user'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
