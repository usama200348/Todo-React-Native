import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Components/Todo';
import './global.css'

export default function App() {
  return (
    <View style={styles.container}>
    
{/* Todo View Task Today  */}

<View style={styles.taskWrapper}>
  <Text style={styles.sectionTitle}>Today's Task</Text>

  <View style={styles.items}>
    {/* All The Task Will Be Perform Over Here  */}
 
 <Todo text={'Task 1'}/>
 <Todo text={'Task 2'}/>

  </View>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
sectionTitle:{
  alignItems:'center',
  fontSize:24,
  fontWeight:'bold',
  textAlign:'center',
  fontFamily:''
},
items:{
  marginTop:30
},
});
