import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{ 
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Screen
        name='screenA'
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size} />
        }}
        component={ScreenA}
      />

      <Screen
        name='screenB'
        options={{ 
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='add' color={color} size={size} />
        }}
        component={ScreenB}
      />
    </Navigator>
  )
}