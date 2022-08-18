/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default function App() {

  useEffect(() => {
      auth()
      // .signInWithEmailAndPassword('rodrigo.goncalves@rocketseat.team', '123456')
      .signInWithEmailAndPassword('priscocleyton@gmail.com', '123123')
      
      .then(account => {
        console.log('account',account)
       
      })
      .catch(error => {
        const { code } = error;

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return alert('Login', 'E-mail e/ou senha inválida.');
        } else {
          return alert('Login', 'Não foi possível realizar o login.');
        }
      })
  
  
  },[] ); 

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};


