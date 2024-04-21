import { Platform, StyleSheet } from "react-native";



//*GlobalStatyles : nos va a servir para configurar nuestros estilos de manera global
export const globalStatyles = StyleSheet.create({
    centerContainer : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
        
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
        color: 'black'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15: 0,
      },
});