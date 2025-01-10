import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Define base theme colors for future reusability
const COLORS = {
  primary: '#3498db', // Light Blue
  secondary: '#2ecc71', // Green
  background: '#ecf0f1', // Light Gray
  text: '#2c3e50', // Dark Gray
  accent: '#e74c3c', // Red
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Default App Base</Text>
      <Text style={styles.subtitle}>Start building your Expo projects here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
  },
});
