import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name='screenA'
        options={{ 
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => <MaterialIcons name='home' size={size} color={color} />
        }}
        component={ScreenA}
      />

      <Screen
        name='screenB'
        options={{ 
          drawerLabel: 'Cadastrar',
          drawerIcon: ({ color, size }) => <MaterialIcons name='add' size={size} color={color} />
        }}
        component={ScreenB}
      />
    </Navigator>
  )
}