/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, createContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Demo from './src/screens/Demo';

export const CounterContext = createContext();

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  // console.log('counter in app : ', counter);

  useEffect(() => {
    AsyncStorage.getItem('appCounter')
      .then(_counter => {
        console.log({_counter});
        if (_counter !== null && _counter !== undefined) {
          setCounter(Number(_counter));
        }
      })
      .catch(e => {});
    AsyncStorage.getItem('appText')
      .then(_text => {
        console.log({_text});
        if (_text !== null && _text !== undefined) {
          setText(_text);
        }
      })
      .catch(e => {});
  }, []);

  const value = {counter, setCounter, text, setText};

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CounterContext.Provider value={value}>
      <View
        style={{
          flex: 1,
          paddingTop: 60,
          paddingHorizontal: 15,
        }}>
        <Demo />
      </View>
    </CounterContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
