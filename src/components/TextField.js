import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {CounterContext} from '../../App';

export default function TextField(props) {
  const state = useContext(CounterContext);

  return (
    <View style={{marginVertical: 30}}>
      <TextInput
        value={state.text}
        onChangeText={text => {
          state.setText(text);
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
