import React, { Component } from 'react'
import { View, SafeAreaView, Text, Button, Alert, Switch, TextInput, Image, Platform, TouchableOpacity } from 'react-native'

import * as Linking from 'expo-linking';

import Cell from '../components/Cell'

class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            platform: Platform.OS,
            text: '',
            input: '',
            input2: '',
        }
    }  

   render() {

    let { text, input } = this.state;

       return (
        <SafeAreaView style={styles.container}>

        <Cell 
        
        title={"React"} 
        
        onPress={()=>{

          console.log('react');

          this.props.navigation.navigate('second');
          

        }} 
        
        />

        <Cell 
        title={"React Native"} 
        onPress={()=>{

          console.log('React Native');

        }} 
        />

        <Cell
        title={"Yarn"} 
        onPress={()=>{

          console.log('Yarn');

        }} 
         />

        <Image
          style={{width:40, height: 40}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        
        <Text style={{fontSize: 40}} >{input}</Text>
        <Text style={{fontSize: 40}} >{text}</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{
            console.log('aaa');
            Linking.openURL('https://github.com/irekasoft/rn_magicapp');
          }}
        >
        <Text style={{fontSize: 20}}>Repo: https://github.com/irekasoft/rn_magicapp</Text>
        </TouchableOpacity>

        <Button 
        title="Fill In"
        onPress={()=>{
          console.log('hi');

          this.setState({
            text: "I just fill in the text input"
          })

          
        }}

        />

      <TextInput
        style={{
          height: 40,
          width: 300,
          margin: 12,
          borderWidth: 1,
          padding: 12,
          fontSize: 20,
        }}
        value={this.state.text}
        onChangeText={
          (text)=>{

            this.setState({
              text: text,
              input: text,
              input2: text,
            })

          }
        }
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
       <Button 
        title="Hello"
        onPress={()=>{
          console.log('hi');

          if (Platform.OS === 'web'){
            alert(text);

          }else{

            Alert.alert(text);

          }
          
        }}

        />
      </SafeAreaView>
       );
   }
}

const styles = {
    container: {
      flex: 1, 
      backgroundColor:'skyblue',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'
    }
  }

export default HomeScreen;
