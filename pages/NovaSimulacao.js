import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import Container from '../components/Container';
import AppNavigator from '../Navigation/AppNavigator';
import Appbar from '../components/Appbar';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import CurrencyInput from 'react-native-currency-input';


const NovaSimulacao = () => {
  const [valorVenda, setValorVenda] = useState('');
  const [data, setData] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [parcelas, setParcelas] = useState('2');
  const [antecipacao, setAntecipacao] = useState('');


  const [resultado, setResultado] = useState({
    valorMDRArredondado: '',
    valorAntecipacaoArredondado: '',
    valorLiquido: '',
  });

  const taxaDebito = 0.01; // 1%
  const taxaCreditoAVista = 0.02; // 2%
  const taxaCredito2a6 = 0.03; // 3%
  const taxaCredito7a12 = 0.04; // 4%
  const taxaAntecipacao = 0.02; // 2%

  const taxaDebitoView = 0.01 * 100 + "%"; // 1%
  const taxaCreditoAVistaView = 0.02 * 100 + "%"; // 2%
  const taxaCredito2a6View = 0.03 * 100 + "%"; // 3%
  const taxaCredito7a12View = 0.04 * 100 + "%"; // 4%
  const taxaAntecipacaoView = 0.02 * 100 + "% a.m."; // 2%




  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };



  useEffect(() => {
    setData(getCurrentDate());
  }, []);

  const handleSimularVenda = () => {
    // Calcula antecipação

    

    let valorAntecipacao = 0;
    if (formaPagamento === 'Débito') {
      valorAntecipacao = 0;
    }
     else if (antecipacao === 'Com antecipação') {
      const n = 1;
      const t = parseFloat(parcelas);
      const A = valorVenda * Math.pow(1 + taxaAntecipacao / n, n * t);
      valorAntecipacao = A - valorVenda;
    }



    const valorAntecipacaoArredondado = valorAntecipacao.toFixed(2);

    // Calcula MDR
    let valorMDR = 0;
    if (formaPagamento === 'Débito') {
      valorMDR = valorVenda * taxaDebito;
    } else if (formaPagamento === 'Crédito') {
      if (parcelas >= 2 && parcelas <= 6) {
        valorMDR = valorVenda * taxaCredito2a6;
      } else if (parcelas >= 7 && parcelas <= 12) {
        valorMDR = valorVenda * taxaCredito7a12;
      } else if (parcelas === '1') {
        valorMDR = valorVenda * taxaCreditoAVista;
      }
    }

    const valorMDRArredondado = valorMDR.toFixed(2);

    // Calcula valor líquido
    const valorLiquido =
      valorVenda - valorAntecipacaoArredondado - valorMDRArredondado;

    setResultado({
      valorMDRArredondado,
      valorAntecipacaoArredondado,
      valorLiquido: valorLiquido.toFixed(2),
    });
  };


  function MoneyInput() {
    const [valorVenda, setValue] = React.useState(0); // can also be null
    
    return <CurrencyInput 
    value={valorVenda} 
    onChangeValue={setValue}
     />;
  }



  return (

    <View>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Header />
        <Container>
          <Text style={styles.title}>Nova Simulação</Text>

    

          <Text style={styles.taxasTitle}>Data da simulação:</Text>
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={data}
            onChangeText={setData}
            editable={false}
          />

          <Text style={styles.taxasTitle}>Valor da venda:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor da venda"
            value={valorVenda}
            onChangeText={setValorVenda}
            keyboardType="decimal-pad"
          />

          <MoneyInput  />

          <View style={styles.radioContainer}>
            <Text style={styles.taxasTitle}>Forma de pagamento:</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <RadioButton
                value="Débito"
                status={formaPagamento === 'Débito' ? 'checked' : 'unchecked'}
                onPress={() => setFormaPagamento('Débito')}
              />
              <Text>Débito</Text>


              <RadioButton
                value="Crédito"
                status={formaPagamento === 'Crédito' ? 'checked' : 'unchecked'}
                onPress={() => setFormaPagamento('Crédito')}
              />
              <Text>Crédito</Text>

            </View>

          </View>

          <Text style={styles.taxasTitle}>Parcelas:</Text>
          <View style={styles.selectContainer}>
            <Picker
              selectedValue={parcelas}
              style={styles.selectInput}
              onValueChange={(itemValue) => setParcelas(itemValue)}>
              {[...Array(11).keys()].map((i) => (
                <Picker.Item key={i} label={`${i + 2}`} value={`${i + 2}`} />
              ))}
            </Picker>
          </View>

          <Text style={styles.taxasTitle}>Antecipação:</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value="Com Antecipação"
              status={
                antecipacao === 'Com antecipação' ? 'checked' : 'unchecked'
              }
              onPress={() => setAntecipacao('Com antecipação')}
            />
            <Text>Com Antecipação</Text>

            <RadioButton
              value="Sem Antecipação"
              status={
                antecipacao === 'Sem Antecipação' ? 'checked' : 'unchecked'
              }
              onPress={() => setAntecipacao('Sem Antecipação')}
            />
            <Text>Sem Antecipação</Text>
          </View>

          <View style={styles.taxasContainer}>
            <Text style={styles.taxasTitle}>Taxas</Text>

            <Text>Taxa débito: {taxaDebitoView}</Text>
            <Text>Taxa crédito à vista: {taxaCreditoAVistaView} </Text>
            <Text>Taxa crédito 2 a 6: {taxaCredito2a6View}</Text>
            <Text>Taxa crédito 7 a 12: {taxaCredito7a12View}</Text>
            <Text>Taxa de antecipação: {taxaAntecipacaoView}</Text>

            <View style={styles.infoTaxa}>
              <Text style={styles.textInfoTaxa}>*Taxas conforme preenchido em 'configurações', para alterar clieque aqui ou vá em CONFIGURAÇÕES</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSimularVenda}>
            <Text style={styles.buttonText}>Simular Venda</Text>
          </TouchableOpacity>

          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Resultado da Simulação</Text>
            <Text>Valor da Venda: {valorVenda}</Text>
            <Text>Forma de Pagamento: {formaPagamento}</Text>
            <Text>Parcelas: {parcelas}</Text>
            <Text>Antecipação: {antecipacao}</Text>
            <View>
              <Text style={styles.totalLiquido}>
                Valor de taxa MDR: - R$ {resultado.valorMDRArredondado}
              </Text>
              <Text style={styles.totalLiquido}>
                Valor de juros : - R$ {resultado.valorAntecipacaoArredondado}
              </Text>
              <View style={styles.line} />
              <Text style={styles.totalLiquido}>
                Total Líquido:  R$ {resultado.valorLiquido}
              </Text>
            </View>
          </View>

        </Container>

      </View>

    </ScrollView>
    <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  line: {
    width: '80%',
    height: 0.4,
    backgroundColor: '#1FA193',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  radioContainer: {
    marginBottom: 20,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    align: 'center',
  },
  totalLiquido: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1FA193',
    fontSize: 20,
  },
  taxasContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  taxasTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',

  },
  saveButton: {
    backgroundColor: '#1FA193',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoTaxa: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInfoTaxa: {
    fontWeight: 'thin',
    color: 'grey'
  },
  inputMoney: {
    fontWeight: 'thin',
    color: 'grey',
    marginTop: 65,
  },
});

export default NovaSimulacao;
