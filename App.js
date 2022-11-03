import React from 'react';
import Title from './src/title/index';
import Form from './src/form/index';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Title />
      </View>
      <View>
        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212830',
    margin: 0,
  },
});
