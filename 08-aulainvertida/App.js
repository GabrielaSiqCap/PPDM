import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Buildstrap } from 'react-native-buildstrap';
import { enableScreens } from 'react-native-screens';
import HomeScreen from './Screens/HomeScreen';
import { dark, light } from './Themes/Theme';

enableScreens();
export default function App() {
  const Tab = createBottomTabNavigator()
  
  return (
    <Buildstrap customThemes={{dark, light}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name='Home' component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Buildstrap>
  );  
}


