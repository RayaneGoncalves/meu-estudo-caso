import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListScreen from './screens/ListScreen'
import DetailsScreen from './screens/DetailsScreen'
const Stack = createNativeStackNavigator()
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" screenOptions={{headerStyle:{backgroundColor:'#fff4f8'},headerTintColor:'#c2185b'}}>
        <Stack.Screen name="List" component={ListScreen} options={{title:'Alunos'}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Detalhes'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
