import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {CounterContext} from '../../App';

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
          state.setCounter(prev => prev - 1);
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
          state.setCounter(prev => prev + 1);
        }}>
        <Text style={{color: 'black', fontSize: 39}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
