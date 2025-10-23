import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const AUTH_TOKEN_KEY = 'userAuthToken';

export default function AuthLayout() {
  const router = useRouter();

  const handleSettingsPress = () => {
    console.log('Botão de Configurações pressionado (área autenticada)');
  };

  const handleLogout = async () => {
     try {
       await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
       router.replace('/');
     } catch (e) {
       console.error("Erro ao fazer logout:", e);
     }
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#5a8147' },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerLeft: () => (
          <Button onPress={handleLogout} title="Sair" color="#fff" />
        ),
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: 'Início',
          headerRight: () => (
            <TouchableOpacity onPress={handleSettingsPress} style={{ marginRight: 15 }}>
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="cases"
        options={{
          title: 'Cases de Sucesso',
          headerRight: () => (
            <TouchableOpacity onPress={handleSettingsPress} style={{ marginRight: 15 }}>
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}