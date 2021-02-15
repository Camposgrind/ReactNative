import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const HomePage: () => React$Node = ({navigation}) => {
  const [palabra, setData] = useState('Teletrabajo');
  return (
    <>
      <View style={styles.body}>
        <Image
          resizeMode="contain"
          style={styles.imagen}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png',
          }}
        />
        <View style={styles.busqueda}>
          <TextInput
            placeholder="Introduce un articulo a buscar"
            style={styles.textoBusqueda}
            onChangeText={(palabrilla) => setData(palabrilla)}></TextInput>
        </View>
        <View style={styles.boton}>
          <TouchableOpacity
            style={styles.botonsito}
            onPress={() => navigation.navigate('Result', {busqueda: palabra})}>
            <Text style={{color: 'white', fontSize: 20}}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTexto}>
          <Text style={styles.texto}>Artículos destacados</Text>
        </View>

        <View style={styles.busquedaRapida}>
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Result', {busqueda: 'Teletrabajo'})
            }>
            <Text style={styles.itemsFont}>Teletrabajo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Result', {busqueda: 'Musica'})}>
            <Text style={styles.itemsFont}>Música</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Result', {busqueda: 'Covid'})}>
            <Text style={styles.itemsFont}>Covid</Text>
          </TouchableOpacity>
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
  imagen: {
    flex: 5,
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textoBusqueda: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  busqueda: {
    elevation: 20,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonsito: {
    elevation: 20,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#474141',
    width: 100,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    elevation: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  busquedaRapida: {
    marginVertical: 10,
    flex: 4,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  item: {
    margin: 5,
    padding: 15,
    fontSize: 18,
    height: 70,
  },
  itemsFont: {
    fontSize: 18,
  },
});

export default HomePage;
