import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4facfe', dark: '#00f2fe' }}
      headerImage={null} // No image
    >
      <ThemedView style={styles.container}>
        <Text style={styles.title}>🚀 Counter App</Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>{count}</Text>
        </View>

        <View style={styles.buttonGroup}>
          <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>Increment</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.decrementButton]}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>Decrement</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.resetButton]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  
    color: '#00796b',
    marginBottom: 10,
  },
  counterBox: {
    backgroundColor: '#b2ebf2',
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#004d40',
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: 200,
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#FF7043',
  },
  resetButton: {
    backgroundColor: '#9C27B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
