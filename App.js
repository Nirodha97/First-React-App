import { create } from 'eslint/lib/rules/*';
import React from 'react';
import { View,Text,StyleSheet } from 'react-native';



const styles1 = StyleSheet.create ({
 
  bar1:{
 
    color:'green',
    padding: 10,
    borderRadius:5,
    margin:2,
    alignItems:'center',
    backgroundColor:'#ff7f50',
    color:'red',
    justifyContent:'center',
    
    

  }
});



const Hello = () => {
  return (

    <View style= {[{margin:5,flex:1}]}>
        <View style={[styles1.bar1,{flex:1}]}>
        <Text style={[{fontSize:20, color:'white'}]}>Hello Java !</Text>
        </View>

        <View style={[styles1.bar1,{flex:2}]}>
        <Text style={[{fontSize:20, color:'white'}]}>Hello Python !</Text>
        </View>

        <View style={[styles1.bar1,{flex:3}]}>
        <Text style={[{fontSize:20, color:'white'}]} >Hello HTML !</Text>
        </View>

        <View style={[styles1.bar1,{flex:4}]}>
        <Text style={[{fontSize:20, color:'white'}]} >Hello C# !</Text>
        </View>

        <View style={[styles1.bar1,{flex:5}]}>
        <Text style={[{fontSize:20, color:'white'}]} >Hello Ruby !</Text>
        </View>
    </View>
    
  
  );
}

export default Hello;