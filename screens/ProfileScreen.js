import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ setUserToken }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
  };

  return (
    <View style={styles.container}>
      <Text>Профиль пользователя</Text>
      <Text>Баланс: 1000 сом</Text>
      <Button title="Выйти" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20, justifyContent: 'center', alignItems: 'center' }
});
