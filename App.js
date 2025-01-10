import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  // Function to calculate heart rate limits
  const calculateHeartRateLimits = () => {
    const numericAge = parseInt(age, 10);
    
    if (isNaN(numericAge) || numericAge <= 0) {
      setResult('Please enter a valid age!');
      return;
    }

    const lowerLimit = Math.round((220 - numericAge) * 0.65);
    const upperLimit = Math.round((220 - numericAge) * 0.85);
    
    setResult(`Lower Limit: ${lowerLimit} bpm, Upper Limit: ${upperLimit} bpm`);
  };

  //UI
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      {result && <Text style={styles.result}>{result}</Text>}
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
