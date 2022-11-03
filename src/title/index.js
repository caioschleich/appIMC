import React from 'react';
import {View, Text} from 'react-native';
import styles from "./style.js"

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Calcule o seu IMC!</Text>
    </View>
  );
}