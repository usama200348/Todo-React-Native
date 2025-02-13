import React from "react";
import { StyleSheet, Text,TouchableOpacity,View } from "react-native";
// import { View } from "react-native";


const Todo =(props)=>{
    return(
        <View style={styles.items}>

            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
       <Text style={styles.circular}></Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    items:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemsLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    itemText:{
        maxWidth:'80%'

    },
    square:{
      width:24,
      height:24, 
      backgroundColor:'#55BCF6',
      opacity:0.4, 
      borderRadius:5,
      marginRight:15
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5
    },
})


export default Todo;