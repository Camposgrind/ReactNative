import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const FlatListPage: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <View style={styles.body}>
        <View style={styles.containerTexto}>
          <Text style={styles.texto}>Práctica FlatList con API</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.item}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    flex: 1,
  },
  containerTexto: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerFlat: {
    flex: 8,
    backgroundColor: 'green',
  },
  item: {
    margin: 5,
    padding: 15,
    fontSize: 18,
    height: 70,
    backgroundColor: 'grey',
  },
  itemsFont: {
    fontSize: 18,
  },
});

export default FlatListPage;
