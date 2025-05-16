import { Redirect } from 'expo-router';
import React, { Component } from 'react';
import '../styles/global.css';

export class index extends Component {
  render() {
    return (
      <Redirect href="/(auth)/welcome"/>
    )
  }
}

export default index