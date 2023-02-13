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
  const [counter, setCounter] = useState(() =>
    getLocalStorage('appCounter', 0),
  );
  const [text, setText] = useState(() => getLocalStorage('appText', ''));

  const value = {counter, setCounter, text, setText};

  function getLocalStorage(key, initialValue) {
    try {
      const value = AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('appCounter')
      .then(_counter => {
        console.log({_counter: JSON.parse(_counter)});
        if (_counter !== null && _counter !== undefined) {
          setCounter(Number(JSON.parse(_counter)));
          // AsyncStorage.removeItem('appCounter');
        }
      })
      .catch(e => {});
    AsyncStorage.getItem('appText')
      .then(_text => {
        console.log({_text: JSON.parse(_text)});
        if (_text !== null && _text !== undefined) {
          setText(JSON.parse(_text));
          // AsyncStorage.removeItem('appText');
        }
      })
      .catch(e => {});
  }, [counter, text]);

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
