import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {CounterContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Counter(props) {
  const state = useContext(CounterContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity
        onPress={() => {
          state.setCounter(prev => {
            AsyncStorage.setItem('appCounter', JSON.stringify(prev - 1)).then(
              varr => {
                console.log('text saved : ');
              },
            );
            return prev - 1;
          });
        }}>
        <Text style={{color: 'black', fontSize: 39}}>-</Text>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          alignItems: 'center',
          borderColor: 'black',
          width: 35,
          paddingVertical: 5,
        }}>
        <Text style={{color: 'black'}}>{state.counter}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          //   state.setCounter(prev => prev + 1);

          state.setCounter(prev => {
            AsyncStorage.setItem('appCounter', JSON.stringify(prev + 1)).then(
              varr => {
                console.log('text saved : ');
              },
            );
            return prev + 1;
          });
        }}>
        <Text style={{color: 'black', fontSize: 39}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
