import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Cell extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Text>Cell</Text>
           </View>
       );
   }
}

const styles = {
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
};

export default Cell;

