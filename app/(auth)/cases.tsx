import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CaseCard } from '../../components/CaseCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CasesScreen() {
  const router = useRouter();

  const handleNavigation = (screen: string) => {
    if (screen === 'home') {
      router.replace('/(auth)/home');
    } else if (screen === 'areas') {
      console.log('Navegando para Minhas áreas');
    } else if (screen === 'cases') {
      console.log('Já está em Cases');
    } else {
      console.log(`Navegando para: ${screen}`);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerInner}
        showsVerticalScrollIndicator={false}
      >
        <CaseCard
          title="Família Souza"
          location="Jardim Comunitário - Belo Horizonte/MG"
          description="Transformaram um espaço de descarte de entulhos em um lindo jardim comunitário com árvores frutíferas. Resultado: 40% de desconto no IPTU!"
          image={require('../../assets/images/family_case.png')}
        />
        <CaseCard
          title="Ação entre amigos"
          location="Praça da Fé"
          description="Uma praça livre de lixos, para as familias aproveitarem"
          image={require('../../assets/images/case_02.jpg')}
        />
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
            <Ionicons name="home-outline" size={26} color="#fff" />
             <Text style={styles.navText}>Início</Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.navItem}
            onPress={() => handleNavigation('areas')}
          >
            <Ionicons name="map-outline" size={24} color="#fff" />
            <Text style={styles.navText}>Minhas áreas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navItem, styles.navItemActive]}
            onPress={() => handleNavigation('cases')}
          >
             <Ionicons name="trophy" size={24} color="#fff" />
            <Text style={[styles.navText, { fontWeight: 'bold' }]}>Cases</Text>
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
  contentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainerInner: {
    paddingTop: 24,
    paddingBottom: 90,
  },
   bottomSpacing: {
     height: 30,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3a592a',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    flex: 1,
  },
  navItemActive: {
     borderBottomWidth: 2,
     borderBottomColor: '#fff',
     paddingBottom: 2,
  },
  navText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 2,
  },
});