import React, { useState, useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as SecureStore from 'expo-secure-store';

import { useColorScheme } from '@/hooks/use-color-scheme';

const AUTH_TOKEN_KEY = 'userAuthToken';

function RootLayoutNav() {
  const segments = useSegments();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
        setIsAuthenticated(!!token);
      } catch (e) {
        console.error("Erro ao verificar autenticação:", e);
        setIsAuthenticated(false);
      } finally {
        setIsReady(true);
      }
    };
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (!isReady || isAuthenticated === null) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';
    const currentRoute = segments.join('/') || '/';

    if (isAuthenticated) {
      if (!inAuthGroup && currentRoute !== '/' && currentRoute !== 'modal') {
         router.replace('/(auth)/home');
      }
    } else {
      if (inAuthGroup) {
        router.replace('/');
      }
    }
  }, [isAuthenticated, isReady, segments, router]);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
   return <RootLayoutNav />;
}