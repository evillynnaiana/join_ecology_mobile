import React, { useState } from 'react';
import {
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';


const backgroundImage = require('../assets/images/plano_fundo.png');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/home');
  };

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeAreaContent} edges={['top', 'bottom']}>
          <View style={styles.overlay}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardView}
            >
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/images/logo_black.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.formContainer}>
                <CustomInput
                  label="E-mail:"
                  placeholder="Informe seu e-mail"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  containerStyle={styles.inputSpacing}
                />
                <CustomInput
                  label="Senha:"
                  placeholder="Informe sua senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  containerStyle={styles.passwordSpacing}
                />
                <CustomButton title="Acessar" onPress={handleLogin} />
              </View>
            </KeyboardAvoidingView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  safeAreaContent: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  keyboardView: {
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 200,
    height: 100,
  },
  formContainer: {
    width: '100%',
    maxWidth: 320,
  },
  inputSpacing: {
    marginBottom: 32,
  },
  passwordSpacing: {
    marginBottom: 48,
  },
});