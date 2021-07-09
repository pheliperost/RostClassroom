import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Animated, Button } from 'react-native';
import AppItem from './AppItem';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function AppList() {

  const [isPlaying, setIsPlaying] = React.useState(true);
  
const [items, setItems] = useState([
  {id: 1, quantidade: 5, descricao: "arroz" }, 
  {id: 2, quantidade: 1, descricao: "feijão" }, 
  {id: 3, quantidade: 0.5, descricao: "lentilha" }, 
  {id: 4, quantidade: 1, descricao: "massa" }, 
  {id: 5, quantidade: 1, descricao: "katchup" }, 
  {id: 6, quantidade: 1, descricao: "queijo-ralado" }
]);
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Compras</Text>
          <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={10}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000', 0.2],
          ]}
          onComplete={() => [true]}
          >
          {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
            {remainingTime}
          </Animated.Text>
          )}
          </CountdownCircleTimer>
          <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)}/>

        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => {
                return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />
            }) }
        </ScrollView>
    </View>
    );
}


/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
}); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});