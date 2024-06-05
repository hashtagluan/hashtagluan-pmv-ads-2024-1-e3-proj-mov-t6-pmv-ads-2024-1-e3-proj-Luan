import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import Appbar from '../components/Appbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const Usuario = () => {
  const [usuarioNome, setusuarioNome] = useState('Usuario'); // Valor inicial da taxa de débito
  const [agencia, setAgencia] = useState('Caratinga'); // Valor inicial da taxa de crédito à vista
  const [email, setEmail] = useState('usuario@email.com'); // Valor inicial da taxa de crédito 2 a 6
  const [senha, setSenha] = useState('1234'); // Valor inicial da taxa de crédito 7 a 12

  const [editusuarioNome, setEditusuarioNome] = useState(false); // Estado para controlar a edição do campo
  const [editAgencia, setEditAgencia] = useState(false); // Estado para controlar a edição do campo
  const [editEmail, setEditEmail] = useState(false); // Estado para controlar a edição do campo
  const [editSenha, setEditSenha] = useState(false); // Estado para controlar a edição do campo

  const handleEditusuarioNome = () => {
    setEditusuarioNome(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditAgencia = () => {
    setEditAgencia(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditEmail = () => {
    setEditEmail(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditSenha = () => {
    setEditSenha(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleSave = () => {};

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Editar Usuário</Text>

      <ScrollView>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Nome do usuário</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={usuarioNome}
              editable={editusuarioNome}
              onChangeText={setusuarioNome}
            />
            {!editusuarioNome && (
              <TouchableOpacity onPress={handleEditusuarioNome}>
                <Icon name="edit" size={20} color="#1FA193" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Agência</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={agencia}
              editable={editAgencia}
              onChangeText={setAgencia}
            />
            {!editAgencia && (
              <TouchableOpacity onPress={handleEditAgencia}>
                <Icon name="edit" size={20} color="#1FA193" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>E-mail</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              editable={editEmail}
              onChangeText={setEmail}
            />
            {!editAgencia && (
              <TouchableOpacity onPress={handleEditEmail}>
                <Icon name="edit" size={20} color="#1FA193" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={senha}
              editable={editSenha}
              secureTextEntry
              onChangeText={setSenha}
            />
            {!editusuarioNome && (
              <TouchableOpacity onPress={handleEditSenha}>
                <Icon name="edit" size={20} color="#1FA193" />
              </TouchableOpacity>
            )}
          </View>
        </View>

       </ScrollView>



        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#1FA193',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  rateLabel: {
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Usuario;
