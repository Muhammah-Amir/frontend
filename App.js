import { View, Text } from 'react-native'
import React from 'react'
import First from './screen/first'
import Second from './screen/second'
import Third from './screen/third'
import Forth from './screen/forth'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home'



//const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View>
      <Home/>
    </View>
  //  <NavigationContainer>
  //   <Stack.Navigator initialRouteName='First'>
  //     <Stack.Screen name='home' component={First}/>
  //     <Stack.Screen name='login' component={Second}/>
  //     <Stack.Screen name='signup' component={Third}/>
  //     <Stack.Screen name='register' component={Third}/>
      
    

  //     </Stack.Navigator>

  //  </NavigationContainer>
  )
}

export default App