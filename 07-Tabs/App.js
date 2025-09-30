//Importa o criador de abas (Bottom Tabs) do react navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

//Importa o container principal de navegação do react navigation
import { NavigationContainer } from "@react-navigation/native";

//Importa o enableScreen do react-native-screens para melhorar performance
import { enableScreens } from "react-native-screens";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Ativa otimizações de telas nativas
enableScreens();

//Cria o componente de navegação por abas (Tab Navigator)
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false, //oculta o cabeçalho superior
            tabBarActiveBackgroundColor: "007AFF",
            tabBarInactiveTintColor: "#666",
            tabBarHideOnKeyboard: true,
            animation: "shift", //para as abas deslizarem
          }}
        >
          <Tab.Screen
            name="Home" //Nome da rota
            component={HomeScreen} //Tela associada a rota
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>🏠</Text>
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>👤</Text>
              ),
            }}
          />
          <Tab.Screen
            name="Configurações"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>⚙️</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
