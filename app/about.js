import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Rick and Morty App</Text>
      <Text style={styles.subtitle}>Versión 1.0.0</Text>

      <Text style={styles.description}>
        Esta aplicación te permite explorar personajes, episodios y locaciones del universo de Rick and Morty. 
        Toda la información proviene de la API pública: https://rickandmortyapi.com/
      </Text>

      <Text style={styles.credits}>Desarrollado por: BCE</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1DA1F2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 20,
  },
  credits: {
    fontSize: 14,
    color: '#777',
  },
});
