import React,{Component}  from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter } from './componentes/Multi';


export default class App extends Component{
  render(){
	  return (
		  <View style={styles.container}>
			  <Simples texto='sk8'/>
			  <ParImpar numero={669}/>
			  <Inverter texto='Phelipe Rost'></Inverter>
		  </View>
	  )
  }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})