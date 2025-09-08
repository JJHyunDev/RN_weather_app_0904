import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {
  const [number, setNumber] = useState(0);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  // 허가 여부
  const [permitted, setPermitted] = useState(true);

  const locationData = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if(!granted) {
      setPermitted(false);
      setErrorMsg('위치에 대한 권한 부여가 거부되었습니다.');

      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({accuracy: 5});
    // console.log(latitude); // 위도
    // console.log(longitude); // 경도

    const address = await Location.reverseGeocodeAsync(
      { latitude, longitude }, 
      { useGoogleMaps: false }
    );

    const cityAddress = address[0].city
    setCity(cityAddress); 
  };
  

  useEffect(() => {
    locationData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.regDateCon}>
        <Text style={styles.regDate}>9월 6일, 토, 14:08</Text>
      </View>
      <ScrollView horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
      <View style={styles.weatherInner}>
        <View style={styles.day}> 
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherInner}>
        <View style={styles.day}> 
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherInner}>
        <View style={styles.day}> 
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherInner}>
        <View style={styles.day}> 
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <View style={styles.weatherInner}>
        <View style={styles.day}> 
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
    flex: 0.3,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  regDateCon: {
    alignItems: "center",
    textAlign: "center",
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
  weather: {
    
  },
  weatherInner: {
    flex: 3,
    width: SCREEN_WIDTH,
  },
  day: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
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
