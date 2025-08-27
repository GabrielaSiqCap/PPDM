import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]); //Estado para armazenar a lista de tarefas
  const [newTask, setNewTask] = useState(""); //Estado para a nova tarefa

  const addTask = () => {
    if (newTask.trim().length > 0) {//Garante que a tarefa não seja vazia
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), text: newTask.trim(), completed: false }, //Cria uma nova tarefa com id único
      ]);
      setNewTask(""); //Limpar o campo de input
      Keyboard.dismiss(); //Fecha o teclado do usuário
    } else {
      Alert.alert("Atenção", "Por favor, digite uma tarefa.");
    }
  };

  return (
    <View style={styles.container}>
      {/*Cabeçalho*/}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Minhas Terefas</Text>
        <TouchableOpacity>
          <Text>🌙</Text>
        </TouchableOpacity>
      </View>

      {/*Local onde o usuário insere tarefas*/}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova tarefa..."
          value={newTask}
          onChangeText={setNewTask} //Cada vez q digitar uma letra, vai adicionando e vai jogando dentro de um aray
          onSubmitEditing={addTask} //Adiciona tarefa ao pressionar Enter no teclado e vai chamar a funçao addTask q faz fechar o teclado ou aparecer alerta
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/*Lista de tarefas do usuário*/}
      <FlatList
        style={styles.flatList}
        data={tasks} //tudo que ele tem lá dentro vai tranformar em dado
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.taskItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity>
              <Text>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhuma tarefa adicionada ainda.
          </Text>
        )}
        contentContainerStyle={styles.flatListContent}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0f7fa",
    flex: 1,
  },
  topBar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50, //ajuste para a barra de status
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBlockColor: "rgba(0,0,0,0.1)",
  },
  topBarTitle: {
    color: "#00796b",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    color: "#000",
    shadowColor: "#000",
    margin: 20,
    borderRadius: 15,
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  input: {
    backgroundColor: "#fcfcfc",
    color: "#333",
    borderColor: "#b0bec5",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    fontSize: 18,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#009688",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListContent: {
    paddingBottom: 10, //Espaçamento no final da lista
  },
  taskItem: {
    backgroundColor: "#fff",
    color: "#333",
    borderColor: "rgba (0,0,0,0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
  },
  taskTextContainer: {
    flex: 1, //Permitir que o texto ocupe o espaço disponível
    marginRight: 10,
  },
  taskText: {
    color: "#333",
    fontSize: 18,
    flexWrap: "wrap", //Permite que o texto quebre linha
  },
  completedTextItem: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    // color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  emptyListText: {
    color: "#9e9e9e",
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});
