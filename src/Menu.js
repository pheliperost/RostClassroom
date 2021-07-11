import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from  '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import  Inverter  from './componentes/Multi';
import Contador from './componentes/Contador';

const Drawer = createDrawerNavigator();

 

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{width:250}}>
        <Drawer.Screen 
          drawerStyle={{marginTop:250}} 
          name="Contador"
          >
          {props =>(
            <Contador />
          )}
      </Drawer.Screen>

      <Drawer.Screen 
        drawerStyle={{marginTop:150}} 
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