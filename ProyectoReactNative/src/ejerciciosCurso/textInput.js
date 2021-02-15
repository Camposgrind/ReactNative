import React from 'react';
import { View,StyleSheet, Button, Text,Alert,FlatList,Image, TextInput} from 'react-native';



const InputPage: () => React$Node = () => {

    return (
        <>
            
            <View style={styles.body}>
                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Práctica Inputs</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Introduce un Email"
                        style={styles.textoInput} 
                        textContentType="emailAddress"
                        keyboardType="email-address">
                    </TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Introduce un Password"
                        style={styles.textoInput} 
                        textContentType="password"
                        secureTextEntry={true}
                        >
                    </TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Introduce una URL"
                        style={styles.textoInput} 
                        textContentType="URL"
                        keyboardType="url">
                    </TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Introduce un Teléfono"
                        style={styles.textoInput} 
                        textContentType="telephoneNumber"
                        keyboardType="number-pad">
                    </TextInput>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    body :{
        padding:20,
        flex:1,
        backgroundColor:"black"
    },
    containerTexto:{
        flex: 1,       
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        fontSize: 25,
        fontWeight:'bold'
    },
    textoBusqueda:{
        color:"black",
        textAlign:"center",
    },
    input:{
        margin:10,
        borderRadius:20,
        flex: 0.25,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    textoInput:{
        fontSize:20
    },

})

export default InputPage;