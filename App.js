import React from 'react'
import { Text, View } from 'react-native' ; 
import './Navigation/RootStack' ; 
import { NavigationContainer , useNavigation  , DefaultTheme,DarkTheme} from '@react-navigation/native';
import RootStack from './Navigation/RootStack';


function App() {
  return (
    <NavigationContainer >
      <RootStack/>
    </NavigationContainer>
  )
}


export default App