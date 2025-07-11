import { StyleSheet, Text, View, Image } from 'react-native';

export function CharacterCard({ character }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.status}>{character.status}</Text>
      <Text style={styles.species}>{character.species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6ecf0', // borde suave como en Twitter
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#1DA1F2', // borde azul twitter
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1DA1F2', // texto oscuro twitter
    marginBottom: 4,
    textAlign: 'center',
  },
  status: {
    fontSize: 14,
    color: '#657786', // gris típico de Twitter
    marginBottom: 2,
  },
  species: {
    fontSize: 14,
    color: '#657786',
  },
});
