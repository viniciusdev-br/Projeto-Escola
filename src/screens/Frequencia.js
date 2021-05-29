import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

/*
  O banco de dados do aluno irá fornecer o percentual de faltas que o aluno têm
  Caso haja uma falta, será possível ver data, e horário da falta do aluno
*/

export default function Frequencia(){
  const data = [89,11];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg:{
      fill: '#2e2fbf'
    }
  }));
  return(
    <View style={styles.container}>
      <PieChart 
        style={styles.chart} 
        data={pieData}        
      />
      <View style={styles.chartPresent}>
        <Text style={{color:'#FFFFFF'}}>89% de presença.</Text>
      </View>

      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        marginHorizontal: 30,
        padding: 11,
        alignItems: 'center',
      }}>
        <Text style={{
          color: '#2e2fbf',
          fontSize: 16,
          fontWeight: 'bold',
        }}>Últimas faltas: </Text>
      </View>

      <View style={styles.tabelaFaltas}>
        <Text style={styles.faltas}>11/04/2012</Text>
        <Text style={styles.faltas}>11/04/2012</Text>
        <Text style={styles.faltas}>11/04/2012</Text>
        <Text style={styles.faltas}>11/04/2012</Text>
        <Text style={styles.faltas}>11/04/2012</Text>
        <Text style={styles.faltas}>11/04/2012</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    chart: {
      height: 200,
      margin: 30,
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    chartPresent:{
      backgroundColor: '#85B2DD',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      borderRadius: 7,
      paddingVertical: 5,
      alignSelftem: 'center',
      alignSelf: 'center',
      marginBottom: 30,
    },
    tabelaFaltas: {
      backgroundColor: '#FF9A83',
      borderRadius: 7,
      marginHorizontal: 30,
      padding: 11,
      alignItems: 'center',
    },
    faltas:{
      color: '#FFFFFF',
      fontSize: 16,
    }
  });