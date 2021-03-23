import React, { Component } from 'react'
import { View, Text, Button, Alert, Switch, TextInput, Image } from 'react-native'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: 'Back at 1pm ',

    }

  }  


  render() {

    let { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 150}} >{text}</Text>
        <Button title="Hello" 

          onPress={()=>{
            console.log('hi');
            
            Alert.alert(text);

          }}

        />

      <Switch
        
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
            })

          }
        }
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Image
          style={{width:140, height: 140}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />

      </View>
    )

  }

}

const styles = {
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }
}


export default App;


