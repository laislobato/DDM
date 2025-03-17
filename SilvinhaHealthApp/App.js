import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";


export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");
  const [messageButton, setMessageImc] = useState("Preencha o peso");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>
          
        <View> 
          <Text style={styles.label}>Altura:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          />
        </View>

        <View style= {{ marginTop: 25 }}> 
          <Text style={styles.label}>Peso:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 80.40'
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() => alert('HAJSDHKSJDHSA')}
        >
          <Ionicons name={'calculator-sharp'} size={24} color='#edf2f4'/>
          <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>

         <View style={styles.imContainer}>
           <Text style={styles.imcText}>Preencha o peso e a altura</Text>
           <Text style={styles.imcResult}>69</Text>
          </View>

      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#7A77FC',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f'
  },
  subTitle: {
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    color: '#7A77FC',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    width: '100%',
    fontSize: 18,
    color: '#7A77FC',
    fontWeight: '',
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    color: '#180902',
    height: 45,
    width: '100%',
    borderColor: '#7A77FC',
    borderBottomWidth: 1.5,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 0,
  },
  button: {
    width:'100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A77FC',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  imcContainer: {
    color: '#',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imcText: {
    fontSize: 18,
    color: '#',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  imcResult: {
    fontSize: 48,
    color: '#',
    fontWeight: 'bold',

  },
});
