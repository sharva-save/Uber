import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../styles/global.css';

export class index extends Component {
  render() {
    return (
      <SafeAreaView className='bg-yellow-400'>
        <Text>index</Text>
      </SafeAreaView>
    )
  }
}

export default index