import { View, Text,Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import { a } from '../assests/icon'




const first = ({navigation}) => {
  return (
    <View style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <View>
      <Text style={{fontWeight:'900',fontSize:25,marginLeft:15,color:'#00401A'}}>WELCOME TO</Text>
      <Text style={{fontWeight:'900',fontSize:25,color:'#00401A'}}>PPSC,FPSC,NTS</Text>
      </View>
      
      <Image style={{top:-13,height:200,width:270,marginBottom:150,marginVertical:70}}
      source={a.wellcome}
      
      />

      <View style={{borderRadius:10,backgroundColor:'#00401A',height:40,width:'90%',alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Text onPress={()=>{
        navigation.navigate("login")}}
        
        
        style={{color:'#FFF',fontWeight:'bold'}} >
        Login
        </Text>            
      </View>
      <View style={{height:40,width:'90%',alignItems:'center',justifyContent:'center',marginTop:-20}}>
        <Text onPress = {()=>{
        navigation.navigate("signup")}}
        
        style={{color:'#000000',fontWeight:'bold'}}>
        signup
        </Text>            
      </View>
      
      
      
    </View>
  )
}

export default first 