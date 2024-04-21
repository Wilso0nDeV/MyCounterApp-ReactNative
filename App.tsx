import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { Counterm3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcons from 'react-native-vector-icons/Ionicons';

export const App = () => {
  
  return (

    //  Configuración para usar la liberóa de react-native-paper y los iconos de Ionic 

    <PaperProvider
      settings={{
        icon: (props) => <IonIcons {...props} />
      }}
    >
      <SafeAreaView style={{flex:1}}>
            {/* <HelloWorldScreen name='Wilson Vasquez'/> */}
            {/* <CounterScreen /> */}
            <Counterm3Screen />
      </SafeAreaView>
    </PaperProvider>
   
  );
};
