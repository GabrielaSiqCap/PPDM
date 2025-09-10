import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
const [valorDigitado, setValorDigitado] = useState("");
const [valorResultado, setValorResultado] = useState(0);

const handlePress = (valor) => {
  setValorDigitado((prev) => prev + valor);
}

const igual = () => {
try {
const calcValorResult = eval(valorDigitado);
setValorResultado(valorDigitado);
setValorDigitado(calcValorResult.toString());
} catch (error) {
setResultado('Erro');
}
};
// const soma = () => {
//   setValorDigitado(setValorDigitado + valorDigitado);
// };

// const subtracao = () => {
//   valorDigitado > 0 && setValorDigitado(setValorDigitado - valorDigitado); //se o contador for mior que zero, adicionar +1, se não, não contar
// };

const reiniciar = () => {
  setValorResultado("");
  setValorDigitado("");
};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.display}>
        <Text style={styles.resultText}>{valorResultado}</Text>
        <Text
        style={styles.inputText}>{valorDigitado}</Text>
      </View>

      <View>
      <View style={styles.caixacentral}>
      <Text ></Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.divisao}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("/")}><Text style={styles.buttonTextColor}>÷</Text></TouchableOpacity>
        </View>
        <View style={styles.divisao}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonTextColor}>×</Text></TouchableOpacity>
        </View>
        <View style={styles.divisao}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonTextColor}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.divisao}>
      <TouchableOpacity style={styles.button} onPress={() => reiniciar("C")}><Text style={styles.c}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}><Text style={styles.buttonText}>0</Text></TouchableOpacity>   
          <TouchableOpacity style={styles.button} onPress={igual}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} ><Text style={styles.buttonTextColor} >-</Text></TouchableOpacity>
        </View>
      </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 28,
    color:  "#444",
    marginBottom: 12,
  },
  inputText: { 
    fontSize: 28,
    color:  "#444",
    padding: 12,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 100,
  },
  c: {
    color: "#DC143C",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextColor:{
    color: "#E90074",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText:{
    color: "#102C57",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonIgual: {
    backgroundColor: "#d9d9d9",
    color: "#DC143C",
    fontSize: 18,
    fontWeight: "bold",
  },
  divisao:{
    marginBottom: 10,
    flexDirection: "row",
  },
  caixacentral:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 150,
    borderRadius: 10,
  },
    display:{
    marginBottom: 20,
    padding: 20,
    minHeight: 100,
    paddingVertical: 30,
    paddingHorizontal: 140,
    justifyContent: "center",
    alignItems:"flex-end", 
    backgroundColor: "#fff",
    borderRadius: 10,
  },
    buttons:{
    marginBottom: 40,
  },
});
