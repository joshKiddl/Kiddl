import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>

const splash = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image style={styles.image1} source={require('./images/splash-logo.png')}/>
        <Image style={styles.image2} source={require('./images/splash-people.png')}/>
        <Text style={styles.h1}>Hey there!</Text>
        <Text style={styles.h2}>Get started and discover a whole new world of fun for your little ones.</Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity 
        style={styles.button}>
          <Text style={styles.buttontext}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttontext2}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  image1: {
    width: 200,
    height: 100,
    resizeMode: 'contain'
  },
  image2: {
    width: 400,
    height: 300,
    marginTop: 50,
    resizeMode: 'contain'
  },
  h1: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
  },
  h2: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#636464',
    width: "70%",
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#EB586E',
    fontSize: 16,
    fontWeight: 'bold',
    width: 303,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: '#B6162E',
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0, // IOS
    shadowRadius: 1, //IOS
    elevation: 2,
 
  },
  buttontext: {
    color: 'white',
  },
  button2: {
    backgroundColor: 'white',
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 600,
    width: 303,
    height: 45,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  buttontext2: {
    color: '#636464',


    </NavigationContainer>
  },
});

export default splash;