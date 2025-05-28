import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CurrentTournamentScreen() {
  const [timer, setTimer] = useState(900); // 15 минут

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Текущий турнир</Text>
      <Text>Таймер: {Math.floor(timer/60)}:{(timer%60).toString().padStart(2, '0')}</Text>
      {timer === 0 && <Text>Лобби и пароль доступны!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center'}
});
