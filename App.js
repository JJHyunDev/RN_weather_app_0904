import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex:1, backgroundColor: 'red' }}></View>
      <View style={{ flex:2, height: 100, backgroundColor: 'darkorange' }}></View>
      <View style={{ flex:2.5, height: 100, backgroundColor: 'green' }}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
