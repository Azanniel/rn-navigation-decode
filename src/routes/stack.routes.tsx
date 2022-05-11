import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='screenA'
        options={{ 
          title: 'Tela A'
        }}
        component={ScreenA}
      />

      <Screen
        name='screenB'
        options={{ 
          title: 'Tela B'
        }}
        component={ScreenB}
      />
    </Navigator>
  )
}