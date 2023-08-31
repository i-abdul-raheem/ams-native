/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

export const DatePickerInput = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Start Date"
          value={startDate}
          onChangeText={setStartDate}
        />
        <TextInput
          style={styles.input}
          placeholder="End Date"
          value={endDate}
          onChangeText={setEndDate}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '48%', // Set width to fit two inputs in a row with some spacing
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    color: 'black',
  },
});
