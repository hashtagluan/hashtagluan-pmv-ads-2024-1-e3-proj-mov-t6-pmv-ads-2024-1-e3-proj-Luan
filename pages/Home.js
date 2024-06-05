import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Container from '../components/Container';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Appbar from '../components/Appbar';
import Ionicons from '@expo/vector-icons/Ionicons';
import MoneyInput from '../components/InputMoney';

const Home = () => {
  const userName = 'Usuário';

  const url = 'https://www.sicoob.com.br/web/sicoobcredileste';

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Container>
          <Text style={styles.welcomeText}>Olá</Text>
          <View style={styles.userNameBox}>
            <Text style={styles.userNameText}>{userName}</Text>
          </View>
          <Text style={styles.welcomeText}>Seja bem-vindo(a)</Text>
        </Container>


        <Container>
          <Text>
            Este aplicativo foi desenvolvido para auxiliar na simulação das
            transações de cartão de crédito.
          </Text>
          <Text>
            Lembre-se que é apenas uma simulação e os valores podem ter
            diferenças{' '}
          </Text>


        </Container>

        <Container>
          <Text style={styles.supportMaterialsTitle}>Notícias</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.newsContainer}>
            <Image
              source={require('../assets/noticia1.png')}
              style={styles.newsImage}
              onPress={() => Linking.openURL(url)}
            />
            <Image
              source={require('../assets/noticia2.png')}
              style={styles.newsImage}
              onPress={() => Linking.openURL(url)}
            />
            <Image
              source={require('../assets/Imagem3.png')}
              style={styles.newsImage}
              onPress={() => Linking.openURL(url)}
            />
          </ScrollView>

          <Text onPress={() => Linking.openURL(url)}>Clique e veja mais</Text>
        </Container>

        <Container>
          <Text style={styles.supportMaterialsTitle}>Materiais de apoio</Text>
          <TouchableOpacity style={styles.supportMaterialItem} onPress={() => Linking.openURL(url)}>
            <Ionicons name="document" size={20} color="#1FA193" />
            <Text style={styles.supportMaterialText}>Documento 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportMaterialItem} onPress={() => Linking.openURL(url)}>
            <Ionicons name="document" size={20} color="#1FA193" />
            <Text style={styles.supportMaterialText}>Documento 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportMaterialItem} onPress={() => Linking.openURL(url)}>
            <Ionicons name="document" size={20} color="#1FA193" />
            <Text style={styles.supportMaterialText}>Documento 3</Text>
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
  welcomeText: {
    color: '#1FA193',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userNameBox: {
    backgroundColor: '#1FA193',
    padding: 5,
    borderRadius: 5,
  },
  userNameText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  newsContainer: {
    flexDirection: 'row',
  },
  newsImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  supportMaterialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1FA193',
  },
  supportMaterialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  supportMaterialText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Home;
