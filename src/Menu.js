import React from 'react';
import {createDrawerNavigator} from  '@react-navigation/drawer';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import  Inverter  from './componentes/Multi';


const Drawer = createDrawerNavigator();

export default createDrawerNavigator({
  /*   Inverter:{
        screen: ()=><Inverter texto='sonabuceta' />,
        navigationOptions: {title: 'Invertido manolo'}
    }, */
    /* ParImpar:{
        screen: () => <ParImpar numero={55} />,
        navigationOptions: {title: 'Parimpa'}
    } */



      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
      );
    

}, { drawerWidth: 300})