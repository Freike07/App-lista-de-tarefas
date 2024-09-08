import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Botton } from './src/componets/botton';
import { TextoInicial } from './src/componets/telaIncial';
import { Base } from './src/componets/tasks';
export default function App() {
  return (


    <View style={styles.container}>
      <View id='telaInicio'>
      <Base></Base>
      </View>
     
      <StatusBar style="auto" />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,

  },
});
