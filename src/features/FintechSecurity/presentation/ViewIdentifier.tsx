import { View, Text } from 'react-native'
import React from 'react'
import { useFintechSecurity } from '../aplication/hooks/useFintechSecurity';

export default function ViewIdentifier() {
  const { identifier } = useFintechSecurity();
  return (
    <View>
      <Text>Identificador del dispositivo obtenido con JSI y TurboModules</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{identifier}</Text>
    </View>
  )
}