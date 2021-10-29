import React from 'react';
import { View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  console.log(navigation);
  return (<View style={{ paddingBottom: 300 }}>
    <Text>HomeScreen</Text>
  </View>)
}

export default HomeScreen;