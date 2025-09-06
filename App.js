import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';


const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>Busan</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.weather}>
        <View style={styles.weatherInner}>
        <View style={styles.day}> 
          <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}> 
          <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}> 
          <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}> 
          <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}> 
          <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE142",
  },
  cityCon: {
    flex: 1,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  weather: {
    backgroundColor: "blue",
  },
  weatherInner: {
    flex: 3,
  },
  day: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  regDate: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
    overflow: "hidden",
  },
  desc: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  tempCon: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 120,
  }
  
});

export default App;

