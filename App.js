import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function textScreen() {
  return(
    <SafeAreaView Style={styles.container, {flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Jeu de mots qualitatif!</Text>
    </SafeAreaView>
  );
}

function pictureScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center',}}>
      <Image style={{width: windowWidth, height: 550}} source={{ uri: 'https://i.kym-cdn.com/photos/images/original/000/182/552/rip-pzy-apple-day-steve-jobs-demotivational-posters-1317861495.jpg'}}></Image>
      <Text>Inutile de me remercier</Text>
    </SafeAreaView>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Texte" component={textScreen} options={{ tabBarIcon: ({ color, size }) => { <Ionicons name="ios-bug" color={"red"} size={15} /> }}} />
      <Tab.Screen name="Image" component={pictureScreen} options={{ tabBarIcon: ({ color, size }) => { <Ionicons name="ios-build" color={"red"} size={15} /> }}} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
