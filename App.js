import React, { Component } from 'react'
import { View, SafeAreaView, Text, Button, Alert, Switch, TextInput, Image, Platform, TouchableOpacity } from 'react-native'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen'

import SecondScreen from './src/screens/SecondScreen'


const Stack = createStackNavigator();

class App extends Component {
 
  render() {
    return (      
      <NavigationContainer>
        
        <Stack.Navigator>

          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="second" component={SecondScreen} />

        </Stack.Navigator>

      </NavigationContainer>
    )
  }

}



export default App;


