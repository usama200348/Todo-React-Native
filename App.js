import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './Components/Todo';
import { useState } from 'react';

export default function App() {

  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([])
  const handleAddTask=()=>{
    Keyboard.dismiss()
    console.log("Task Checking");
    setTaskItems([...taskItems,task])
    setTask(null)
    
  }

const CompleteTask=(index)=>{
  let itemsCopy=[...taskItems]
  itemsCopy.splice(index,1)
  setTaskItems(itemsCopy)
}



  return (
    <View style={styles.container}>
      {/* Todo View Task Today */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
      
      {
        taskItems.map((item,index)=>{
          return(
      <TouchableOpacity key={index} onPress={()=>CompleteTask(index)}>
          <Todo text={item} />
          </TouchableOpacity>
          )
        })
      }
      
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"} style={styles.writeTextWrapper}>
        <TextInput style={styles.input} placeholder={'Enter Todo Here'} value={task} onChangeText={text=>setTask(text)} />
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTextWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    alignItems:'center',
    backgroundColor: '#FFF',
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: '#C0C0C0', 
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 32,
    color: '#000', 
  },
});