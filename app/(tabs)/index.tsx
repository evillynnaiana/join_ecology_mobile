import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal (Home)</Text>
      <Text>Bem-vindo à área logada!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
