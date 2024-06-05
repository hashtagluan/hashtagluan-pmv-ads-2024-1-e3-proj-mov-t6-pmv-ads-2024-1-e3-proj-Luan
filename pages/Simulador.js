import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import Appbar from '../components/Appbar';
import Container from '../components/Container';

const Simulador = () => {
  const data = [
    { id: 1, title: 'Simulação 1' },
    { id: 2, title: 'Simulação 2' },
    { id: 3, title: 'Simulação 3' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => handleEditSimulation(item.id)}>
          <MaterialIcons name="edit" size={24} color="#1FA193" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteSimulation(item.id)}>
          <MaterialIcons name="delete" size={24} color="#1FA193" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleEditSimulation = (id) => {};

  const handleDeleteSimulation = (id) => {};

  const handleAddSimulation = () => {};

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Simulações</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity style={styles.fab} onPress={handleAddSimulation}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fab: {
    bottom: 20,
    right: 20,
    backgroundColor: '#1FA193',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Simulador;
