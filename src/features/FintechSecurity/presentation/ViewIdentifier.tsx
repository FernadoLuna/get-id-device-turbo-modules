import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFintechSecurity } from '../aplication/hooks/useFintechSecurity';

export default function ViewIdentifier() {
  const { identifier, isLoading, error, refresh } = useFintechSecurity();

  const displayValue = identifier || 'Cargando identificador...';

  return (
    <View style={styles.screen}>
      <View style={styles.topBand} />

      <View style={styles.header}>
        <Text style={styles.brand}>OXXO PAYLAB</Text>
        <Text style={styles.subtitle}>Seguridad del dispositivo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>ID del dispositivo</Text>
        <Text style={styles.value}>{displayValue}</Text>

        {isLoading ? <Text style={styles.loading}>Validando integridad...</Text> : null}
        {error ? <Text style={styles.error}>No se pudo leer el identificador.</Text> : null}

        <Pressable style={styles.button} onPress={refresh}>
          <Text style={styles.buttonText}>Reintentar lectura</Text>
        </Pressable>
      </View>

      <Text style={styles.footnote}>TurboModule + JSI · Ready para pruebas en caja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    justifyContent: 'center',
    backgroundColor: '#fff7d6',
  },
  topBand: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 170,
    backgroundColor: '#ffd100',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  header: {
    marginBottom: 14,
  },
  brand: {
    color: '#d0021b',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  subtitle: {
    color: '#222222',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 18,
    borderWidth: 2,
    borderColor: '#d0021b',
    shadowColor: '#9a0013',
    shadowOpacity: 0.2,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  cardTitle: {
    color: '#333333',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: '700',
  },
  value: {
    color: '#111111',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    marginBottom: 14,
  },
  loading: {
    color: '#8c6d00',
    fontSize: 13,
    marginBottom: 10,
    fontWeight: '600',
  },
  error: {
    color: '#b00020',
    fontSize: 13,
    marginBottom: 10,
    fontWeight: '700',
  },
  button: {
    marginTop: 2,
    backgroundColor: '#0047ba',
    borderRadius: 12,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  footnote: {
    marginTop: 18,
    color: '#4f4f4f',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
});