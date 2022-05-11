import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

type ParamsProps = {
  name: string
}

export function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as ParamsProps;

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{name}</Text>

      <Button title='Voltar' onPress={navigation.goBack} />
    </View>
  );
}