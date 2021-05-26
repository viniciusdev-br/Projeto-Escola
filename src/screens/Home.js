import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export  default function Login( { navigation } ){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Página Principal</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    
    image: {
        width: 200,
        height: 200,
    }
});