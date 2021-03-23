import React, { Component } from 'react'
import { View, SafeAreaView, Text, Button, Alert, Switch, TextInput, Image, Platform } from 'react-native'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: Platform.OS,

    }

  }  


  render() {

    let { text } = this.state;

    return (
      <SafeAreaView style={styles.container}>

        <Image
          style={{width:40, height: 40}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={{fontSize: 40}} >{text}</Text>
        <Text style={{fontSize: 20}}>Repo: https://github.com/irekasoft/rn_magicapp</Text>

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
    )

  }

}

const styles = {
  container: {
    // flex: 1, 
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }
}


export default App;


