import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Altura = Dimensions.get('window').height;
const Anchura = Dimensions.get('window').width;

const ResultPage: () => React$Node = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const palabraBusqueda = route.params.busqueda;
  let listaArticulos = [];
  useEffect(() => {
    fetch(
      'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=' +
        palabraBusqueda,
    )
      .then((response) => response.json())
      .then((json) => {
        json.query.search.forEach((element) => {
          let articulo = {
            id: element.pageid.toString(),
            title: element.title,
            snippet: element.snippet,
          };
          listaArticulos.push(articulo);
        });
        setData(listaArticulos);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const Item = ({item}) => (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('Detail', {
            palabra: item.title,
            texto: item.snippet,
          })
        }>
        <Text style={styles.itemsFont}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <>
      <View style={styles.body}>
        <View style={styles.busquedaRapida}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#b0bbba',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  busquedaRapida: {
    elevation: 20,
    marginVertical: 10,
    flex: 8,
    borderRadius: 20,
  },
  item: {
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 5,
    backgroundColor: 'white',
    height: Anchura * 0.15,
    justifyContent: 'center',
  },
  itemsFont: {
    fontSize: 18,
  },
});

export default ResultPage;
