import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from  '@react-navigation/drawer';
//import {createDrawerNavigator} from  'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import  Inverter  from './componentes/Multi';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();

/* 
<Drawer.Screen 
drawerStyle={{marginTop:120}} 
name="Inverter"
options={{ drawerLabel: 'Inversao' }}  
 >
  {props =>(
    <Inverter texto='sonabuceta' />
  )}
</Drawer.Screen> */

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{width:250}}>
      <Drawer.Screen 
        drawerStyle={{marginTop:120}} 
        name="Simples"
        >
        {props =>(
          <Simples texto='ate' />
        )}
      </Drawer.Screen>
      <Drawer.Screen 
        name="ParImpar"        
        options={{ drawerLabel: 'Par ou impar' }}
        >
          {props =>(
              <ParImpar numero={63} />
          )}
          </Drawer.Screen>
    </Drawer.Navigator>
  );
}


export default function AppMenu(){
    return(
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
    );
}
/* 
export default createDrawerNavigator({
     Inverter:{
        screen: ()=><Inverter texto='sonabuceta' />,
        navigationOptions: {title: 'Invertido manolo'}
    }, 
    ParImpar:{
        screen: () => <ParImpar numero={55} />,
        navigationOptions: {title: 'Parimpa'}
    }

    
}, { drawerWidth: 300}) */