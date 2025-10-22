import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface CaseCardProps {
  title: string;
  location: string;
  description: string;
  image: ImageSourcePropType;
}

export const CaseCard: React.FC<CaseCardProps> = ({
  title,
  location,
  description,
  image,
}) => {
  return (
    <View style={styles.card}>
      
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />

      
      <View style={styles.content}>
        
        <Text style={styles.title}>{title}</Text>
        
        <Text style={styles.location}>{location}</Text>
        
       
        <Text style={styles.description}>{description}</Text>
        
    
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 24,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 20,
    marginBottom: 16,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d1d5db',
  },
  dotActive: {
    backgroundColor: '#44692F',
  },
});