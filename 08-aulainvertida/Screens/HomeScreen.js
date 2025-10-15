
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { createStyles, useTheme } from "react-native-buildstrap";
import { customStyles } from "../styles/CustomStyles";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {

  const styles = createStyles(customStyles()); //passamos nossa folha de estilos como função
  const {toggleTheme, isDark} = useTheme()

  return (
    <View style={[styles.container, styles.bgToggle]}>

        <Text style={[styles.textToggle, styles.mb1]}>Página Inicial</Text>

        <TouchableOpacity onPress={toggleTheme} style={[styles.bgPrimary, styles.px1, styles.py1, styles.roundedCircle]}>
        {isDark ? <Ionicons name="sunny" size={24} color="white" ></Ionicons>:<Ionicons name="moon" size={24} color="white" ></Ionicons>}
        </TouchableOpacity>


          <Text style={[styles.mt2, styles.text]}>Meu estilo próprio</Text>

        <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />  
    </View>
  );
}