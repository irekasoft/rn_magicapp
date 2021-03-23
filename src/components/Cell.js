import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

class Cell extends Component {
   render() {
       return (
           <TouchableOpacity
             activeOpacity={0.5} 
             onPress={this.props.onPress}

           >
           <View style={styles.container}>
               
            <Image
                style={{width:60, height: 60}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text style={{
                fontSize:21,
                marginLeft: 6,
            }}>
             {this.props.title}    
            </Text>
           </View>
           </TouchableOpacity>
       );
   }
}

const styles = {
   container: {
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       marginBottom: 10,
       backgroundColor: 'white',
       padding: 12,
       width: 300,
    //    flex: 1,
   },
};

export default Cell;

