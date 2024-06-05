import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Container from '../components/Container';
import Appbar from '../components/Appbar';
import Icon from 'react-native-vector-icons/FontAwesome';




const Configuracoes = () => {
  const [debito, setDebito] = useState('1'); // Valor inicial da taxa de débito
  const [creditoVista, setCreditoVista] = useState('2'); // Valor inicial da taxa de crédito à vista
  const [credito2a6, setCredito2a6] = useState('3'); // Valor inicial da taxa de crédito 2 a 6
  const [credito7a12, setCredito7a12] = useState('4'); // Valor inicial da taxa de crédito 7 a 12
  const [antecipacao, setantecipacao] = useState('4'); // Valor inicial da taxa de crédito 7 a 12

  const [editDebito, setEditDebito] = useState(false); // Estado para controlar a edição do campo
  const [editcreditoVista, seteditcreditoVista] = useState(false); // Estado para controlar a edição do campo
  const [editcredito2a6, seteditcredito2a6] = useState(false); // Estado para controlar a edição do campo
  const [editcredito7a12, seteditcredito7a12] = useState(false); // Estado para controlar a edição do campo
  const [editantecipacao, seteditantecipacao] = useState(false); // Estado para controlar a edição do campo


  const handleEdit = () => {
    setEditDebito(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditcreditoVista = () => {
    seteditcreditoVista(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditcredito2a6 = () => {
    seteditcredito2a6(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditcredito7a12 = () => {
    seteditcredito7a12(true); // Torna o campo editável ao clicar no ícone de edição
  };

  const handleEditantecipacao = () => {
    seteditantecipacao(true); // Torna o campo editável ao clicar no ícone de edição
  };

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Header />
      <Container>
        <Text style={styles.title}>Cadastro de Condições comerciais</Text>
        <Container>
          <Text>
            Informe abaixo as condições atuais fornecidas pela sua agência:
          </Text>
        </Container>

        <View style={styles.rateContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.rateLabel}>Taxa Débito</Text>
            <TextInput
              style={styles.input}
              value={debito}
              editable={editDebito}
              keyboardType="decimal-pad"
              onChangeText={setDebito}
            />
            {!editDebito && (
              <TouchableOpacity onPress={handleEdit}>
                <Icon name="edit" size={20} color="#1FA193" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Repita o mesmo padrão para as outras taxas */}
        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Taxa Crédito à Vista</Text>
          <TextInput
            style={styles.input}
            value={creditoVista}
            onChangeText={setCreditoVista}
            keyboardType="decimal-pad"
            editable={editcreditoVista}
          />
          {!editcreditoVista && (
            <TouchableOpacity onPress={handleEditcreditoVista}>
              <Icon name="edit" size={20} color="#1FA193" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Taxa Crédito 2 a 6</Text>
          <TextInput
            style={styles.input}
            value={credito2a6}
            onChangeText={setCredito2a6}
            keyboardType="decimal-pad"
            editable={editcredito2a6}
          />
          {!editcredito2a6 && (
            <TouchableOpacity onPress={handleEditcredito2a6}>
              <Icon name="edit" size={20} color="#1FA193" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Taxa Crédito 7 a 12</Text>
          <TextInput
            style={styles.input}
            value={credito7a12}
            onChangeText={setCredito7a12}
            keyboardType="decimal-pad"
            editable={editcredito7a12}
          />
          {!editcredito7a12 && (
            <TouchableOpacity onPress={handleEditcredito7a12}>
              <Icon name="edit" size={20} color="#1FA193" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateLabel}>Taxa Antecipação</Text>
          <TextInput
            style={styles.input}
            value={antecipacao}
            onChangeText={setantecipacao}
            keyboardType="decimal-pad"
            editable={editantecipacao}
          />
          {!editantecipacao && (
            <TouchableOpacity onPress={handleEditantecipacao}>
              <Icon name="edit" size={20} color="#1FA193" />
            </TouchableOpacity>
          )}
        </View>

        {/* ... */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </Container>
      </ScrollView>
      <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  saveButton: {
    backgroundColor: '#1FA193',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateLabel: {
    flex: 1,
    marginRight: 10,
  },
});

export default Configuracoes;
