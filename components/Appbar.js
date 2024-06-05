import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Container from '../components/Container';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Appbar = () => {
  
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.appBarButton} onPress={() => handleNavigate('Home')}>
          <MaterialIcons name="home" size={24} color="#1FA193" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appBarButton} onPress={() => handleNavigate('Simulador')}>
          <MaterialIcons name="attach-money" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appBarButton} onPress={() => handleNavigate('Usuario')}>
          <MaterialIcons name="person" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appBarButton} onPress={() => handleNavigate('Configuracoes')}>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
    appBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    
  },
  appBarButton: {
    alignItems: 'center',
  },
});

export default Appbar;