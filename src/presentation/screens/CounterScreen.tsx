import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from './components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const onPressAumentCounter = () => {
    setCounter(counter + 1);
  };
  const onPressResetCounter = () => {
    setCounter(0);
  };

  //*View : Es el componente mas fundamental para crear UI. Funciona como un <div></div>
  //*      Admite : Diseño Flex, estilo, manejo de tactil y controles de accebilidad.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* <PrimaryButton 
      labael='Incrementar'
      onPressAumentCounter={onPressAumentCounter} 
      onPressResetCounter = {onPressResetCounter}
      /> */}

      {/*Estos componentes ya trabajan con los estandares de React-native */}
      <Button
        mode="elevated"
        onPress={onPressAumentCounter}
        onLongPress={onPressResetCounter}>
        Incrementar
      </Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
