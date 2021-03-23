import React, { Component } from 'react'
import { View, SafeAreaView, Text, Button, Alert, 
    Switch, TextInput, Image, Platform, TouchableOpacity,
    ScrollView, Animated, Easing,
 } from 'react-native'

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
            fadeAnim: new Animated.Value(1),
            rotateAnim: new Animated.Value(0),
        }
    }  

    componentDidMount(){

      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 5000
      }).start();

      Animated.loop(

      Animated.timing(this.state.rotateAnim, {
        toValue: 180,
        duration: 50000,
        // useNativeDriver: true,
        // easing: Easing.linear,
      })).start();

    }

   render() {

    let tech_array = [
        {
            title: 'React',
        },
        {
            title: 'React Native',
        },
    ]

    let { text, input } = this.state;

       return (
        <ScrollView>
        <SafeAreaView style={styles.container}>

        <Animated.View
          style={[
            {
              opacity: this.state.fadeAnim 
            }
          ]}
        >
          <Text style={{fontSize:30}}>Fading View!</Text>
        </Animated.View>  

        {
          tech_array.map((item, idx) => {
            return (
              <Cell 
  
                title={item.title}                 
                onPress={()=>{        
                  console.log('react');
                  this.props.navigation.navigate('second',{
                      title: item.title,
                  });
        
                }} 
              
              />     
            )
          })
        }        

        <Animated.View
          style={[
            {
              transform: [{ rotate: this.state.rotateAnim }],
            }
          ]}
        >
        <Image
          style={[{            
              width:40, height: 40,            
            },]}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        </Animated.View>


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
      </ScrollView>
    );
   }
}

const styles = {
    container: {
      flex: 1, 
      backgroundColor:'lightGrey',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'
    }
  }

export default HomeScreen;
