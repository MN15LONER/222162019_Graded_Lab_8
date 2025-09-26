//Username is admin and the password is 1234
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login_Screen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) 
        {
            alert('All values are required');
            return;
        }

    if (username === 'admin' && password === '1234') 
        {
            alert('Login successful');
        } 
    else 
        {
            alert('Invalid details');
         }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input}placeholder="Username" value={username}onChangeText={setUsername}
        />
        <TextInput style={styles.input}placeholder="Password" value={password}onChangeText={setPassword} secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop:300,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: 'white',
    height:50,
  },
  button: {
    backgroundColor: 'green',
    height:50,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});