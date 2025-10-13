import React from 'react';
import {
  TextInput,
  View,
  Text, 
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  label?: string; 
  containerStyle?: StyleProp<ViewStyle>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,          
  containerStyle, 
  style,          
  ...restProps    
}) => {
  return (
    <View style={containerStyle}> 
      {label && <Text style={styles.label}>{label}</Text>}
      
      <TextInput 
        style={[styles.input, style]}
        placeholderTextColor="#9ca3af"
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff', 
    marginBottom: 12,
  },
  input: {
    height: 45,
    fontSize: 15,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
});