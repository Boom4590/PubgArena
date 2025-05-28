import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function TournamentsScreen() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/tournaments')
      .then(res => setTournaments(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.tournament}>
      <Text>{item.name} — {item.status}</Text>
      <Button title="Участвовать" onPress={() => alert('Регистрация в турнире пока не реализована')} />
    </View>
  );

  if (loading) {
    return <ActivityIndicator style={{marginTop: 50}} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tournaments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20 },
  tournament: { padding: 10, marginBottom: 10, borderWidth:1, borderRadius:5 },
});
