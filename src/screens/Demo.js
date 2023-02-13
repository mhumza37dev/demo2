import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CounterContext} from '../../App';
import Button from '../components/Button';
import Counter from '../components/Counter';
import TextField from '../components/TextField';

export default function Demo() {
  const state = useContext(CounterContext);

  useEffect(() => {
    console.log(state.text);
    AsyncStorage.setItem('appCounter', `${state.counter}`);
    AsyncStorage.setItem('appText', `${state.text}`);
  }, [state]);
  return (
    <View style={styles.mainStyles}>
      <Counter />
      <TextField />
      {state.counter >= 5 || state.text.toLowerCase() === 'dnamicro' ? (
        <Text style={{alignSelf: 'center', fontSize: 20}}>DNA Rocks!</Text>
      ) : null}

      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyles: {
    flex: 1,
    backgroundColor: 'white',
  },
});
