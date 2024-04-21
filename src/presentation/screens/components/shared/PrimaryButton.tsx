import { Pressable, StyleSheet, Text} from 'react-native';


interface Props  {
  labael : string
  onPressAumentCounter: ()  => void;
  onPressResetCounter : () => void;
}



export const PrimaryButton = ({labael, onPressAumentCounter,onPressResetCounter}: Props) => {
    //* React Native recomienda usar : Pressable en lugar de Button
    //onLongPress: si mantienes presionado el Pressable, este realiza una accion, en este caso resetea el counter
  return (
    <Pressable 
    onPress={onPressAumentCounter}
    onLongPress={onPressResetCounter}
    
    style={({pressed})=>[
      styles.button,
      pressed && styles.buttonPressed
    ]}
    >
      <Text style={{color: 'white'}}>{labael}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button : {
    backgroundColor : '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed : {
    backgroundColor: '#292889'
  }
});
