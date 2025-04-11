import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://www.w3schools.com/w3images/avatar2.png',
        }}
      />
      <Text style={styles.label}>Email</Text>
      <Input
        placeholder="Digite seu email"
        leftIcon={{ name: 'envelope', type: 'font-awesome', color: '#000' }}
      />
      <Text style={styles.label}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        leftIcon={<Icon name="lock" size={20} color="#000" />}
        secureTextEntry
      />
      <Button
        title="Entrar"
        buttonStyle={styles.button}
        onPress={() => {}}
      />
      <Button
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        title="Esqueceu Senha?"
        type="clear"
        titleStyle={{ color: '#007BFF' }}
        onPress={() => navigation.navigate('EsqueciSenha')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Input placeholder="Nome" leftIcon={<Icon name="user" size={20} color="#000" />} />
      <Input placeholder="Email" leftIcon={<Icon name="envelope" size={20} color="#000" />} />
      <Input placeholder="Senha" leftIcon={<Icon name="lock" size={20} color="#000" />} secureTextEntry />
      <Button title="Cadastrar" buttonStyle={styles.button} onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Input placeholder="Digite seu email" leftIcon={<Icon name="envelope" size={20} color="#000" />} />
      <Button title="Enviar" buttonStyle={styles.button} onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
};
