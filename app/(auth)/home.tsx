import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  const handleNavigation = (screen: string) => {
    if (screen === 'cases') {
      router.push('/(auth)/cases');
    } else if (screen === 'areas') {
      console.log('Navegando para Minhas áreas');
    } else if (screen === 'home') {
      console.log('Já está na Home');
    } else {
      console.log(`Navegando para: ${screen}`);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerInner}
      >
        <Text style={styles.greetingText}>Olá, Evillyn</Text>

        <View style={styles.illustrationContainer}>
          <View >
            <Image
              source={require('../../assets/images/home.png')}
          
            />
          </View>
          <View style={styles.documentPreview}>
            <View style={styles.documentHeader}>
              <View style={styles.documentDot} />
              <View style={styles.documentDotGray} />
            </View>
            <View style={styles.documentItem}>
              <View style={styles.itemDot} />
              <View style={styles.itemLine} />
              <View style={styles.itemLineLong} />
            </View>
            <View style={styles.documentItem}>
              <View style={styles.itemDot} />
              <View style={styles.itemLineShort} />
            </View>
            <View style={styles.documentItem}>
              <View style={styles.itemDot} />
              <View style={styles.itemLineShort} />
            </View>
            <View style={styles.documentFooter} />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log('Adicionar Pressionado')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <SafeAreaView style={styles.bottomNavSafeArea} edges={['bottom']}>
        <View style={styles.bottomNav}>
           <TouchableOpacity
            style={[styles.navItem, styles.navItemActive]}
            onPress={() => handleNavigation('home')}
          >
            <Ionicons name="home" size={26} color="#fff" />
            <Text style={[styles.navText, { fontWeight: 'bold' }]}>Início</Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.navItem}
            onPress={() => handleNavigation('areas')}
          >
             <Ionicons name="map-outline" size={24} color="#fff" />
            <Text style={styles.navText}>Minhas áreas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => handleNavigation('cases')}
          >
             <Ionicons name="trophy-outline" size={24} color="#fff" />
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
  greetingText: {
    fontSize: 24,
    color: '#333',
    fontWeight: '300',
    paddingHorizontal: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainerInner: {
    paddingBottom: 100,
  },
  illustrationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
   

  documentPreview: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: 180,
    minHeight: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  documentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  documentDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#d1d5db',
  },
  documentDotGray: {
     width: 12,
    height: 12,
    borderRadius: 6,
     backgroundColor: '#d1d5db',
  },
   documentItem: {
    marginBottom: 20,
  },
  itemDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#44692F',
    marginBottom: 8,
  },
  itemLine: {
    height: 3,
    backgroundColor: '#44692F',
    borderRadius: 2,
    width: '60%',
    marginBottom: 4,
  },
  itemLineLong: {
    height: 3,
    backgroundColor: '#44692F',
    borderRadius: 2,
    width: '90%',
  },
  itemLineShort: {
    height: 3,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    width: '80%',
    marginBottom: 4,
  },
   documentFooter: {
    height: 20,
    backgroundColor: '#44692F',
    borderRadius: 10,
    marginTop: 16,
    width: '60%',
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