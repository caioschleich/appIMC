import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
  return (
    <View>
      <Text style={styles.messageIMC}>{props.messageResultImc}</Text>
      <Text style={styles.resultIMC}>{props.resultImc}</Text>
      <Text></Text>
    </View>
  );
}
