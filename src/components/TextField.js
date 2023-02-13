import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {CounterContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TextField(props) {
  const state = useContext(CounterContext);

  return (
    <View style={{marginVertical: 30}}>
      <TextInput
        value={state.text}
        onChangeText={text => {
          state.setText(text);
          AsyncStorage.setItem('appText', JSON.stringify(text)).then(varr => {
            console.log('text saved : ');
          });
        }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: '40%',
          alignSelf: 'center',
          height: 35,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
