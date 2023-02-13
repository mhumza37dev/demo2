import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {CounterContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Button() {
  const state = useContext(CounterContext);
  return (
    <TouchableOpacity
      onPress={() => {
        state.setCounter(0);
        state.setText('');
        AsyncStorage.setItem('appCounter', `${0}`);
        AsyncStorage.setItem('appText', ``);
      }}
      activeOpacity={0.9}
      style={{
        borderWidth: 1,
        backgroundColor: 'gray',
        width: '40%',
        height: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      }}>
      <Text>Reset</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
