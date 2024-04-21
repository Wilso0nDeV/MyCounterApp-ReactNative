import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStatyles} from './theme/global.styles';
import {FAB} from 'react-native-paper';

export const Counterm3Screen = () => {
  const [counter, setCounter] = useState(10);

  const onPressAumentCounter = () => {
    setCounter(counter + 1);
  };
  const onPressResetCounter = () => {
    setCounter(0);
  };

  return (
    
    <View style={globalStatyles.centerContainer}>
      <Text style={globalStatyles.title}>{counter}</Text>

      
      {/* Floating action button, estamos usando los iconos de Ionic */}
      <FAB
        icon="add"
        style={globalStatyles.fab}
        onPress={onPressAumentCounter}
        onLongPress={onPressResetCounter}
      />
    </View>
  );
};
