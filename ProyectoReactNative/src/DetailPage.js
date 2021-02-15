import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';

const DetailPage: () => React$Node = ({route}) => {
  const titulo = route.params.palabra;
  const definicion = route.params.texto;

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
        <Text style={styles.textoCabezera}> {titulo}</Text>
        <View style={styles.containerArticulo}>
          <ScrollView>
            <HTML source={{html: definicion}} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#b0bbba',
  },
  imagen: {
    flex: 5,
    margin: 10,
  },
  containerArticulo: {
    margin: 10,
    padding: 20,
    flex: 4,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
  },
  textoCabezera: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textoArticulo: {
    fontSize: 15,
  },
});

export default DetailPage;
