import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Noticias from './Noticias';
import Frequencia from './Frequencia';
import Turma from './Turma';
import Refeitorio from './Refeitorio';
import Notas from './Notas';


const Tab = createBottomTabNavigator();

export default function Home(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Noticas" component={Noticias} />
            <Tab.Screen name="Frequencia" component={Frequencia} />   
            <Tab.Screen name="Turma" component={Turma} />
            <Tab.Screen name="Refeitorio" component={Refeitorio} />
            <Tab.Screen name="Notas" component={Notas} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
});