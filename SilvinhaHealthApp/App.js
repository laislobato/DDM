import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
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
    marginBottom: 15,
    marginLeft: 5,
  },
  input: {
    color: '#180902',
    height: 45,
    width: '50%',
    borderColor: '#7A77FC',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 0,
  },
});
