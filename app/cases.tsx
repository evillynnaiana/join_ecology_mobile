import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CaseCard } from '../components/CaseCard';

export default function CasesScreen() {
  const router = useRouter();

  const handleNavigation = (screen: string) => {
    if (screen === 'home') {
      router.push('/home');
    } else if (screen === 'areas') {
      // router.push('/areas');
      console.log('Navegando para Minhas áreas');
    } else {
      console.log(`Navegando para: ${screen}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5a8147" />
      
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo_black.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => handleNavigation('settings')}
          >
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    
      <ScrollView 
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerInner}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de Case de Sucesso */}
        <CaseCard
          title="Família Souza"
          location="Jardim Comunitário - Belo Horizonte/MG"
          description="Transformaram um espaço de descarte de entulhos em um lindo jardim comunitário com árvores frutíferas. Resultado: 40% de desconto no IPTU!"
          image={require('../assets/images/family_case.png')}
        />

        
        {<CaseCard
          title="Ação entre amigos"
          location="Praça da Fé"
          description="Uma praça livre de lixos, para as familias aproveitarem"
          image={require('../assets/images/case_02.jpg')}
        /> }

        
        <View style={styles.bottomSpacing} />
      </ScrollView>

    
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => console.log('Adicionar novo case')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <SafeAreaView style={styles.bottomNavSafeArea} edges={['bottom']}>
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => handleNavigation('home')}
          >
            <Ionicons name="home" size={26} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => handleNavigation('areas')}
          >
            <Text style={styles.navText}>Minhas áreas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.navItem, styles.navItemActive]}
            onPress={() => handleNavigation('cases')}
          >
            <Text style={styles.navText}>Cases</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    backgroundColor: '#5a8147',
  },
  header: {
    backgroundColor: '#5a8147',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 50,
  },
  settingsButton: {
    padding: 8,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainerInner: {
    paddingTop: 24,
    paddingBottom: 20,
  },
  bottomSpacing: {
    height: 100,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 100,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#44692F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomNavSafeArea: {
    backgroundColor: '#44692F',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#44692F',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});