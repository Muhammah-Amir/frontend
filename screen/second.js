import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { a } from '../assests/icon'




const second = (navigation) => {
  return (
    <View style={{height:'100%',width:'100%'}}>
      <View style={{alignContent:'center',alignItems:'center'}}>
      <Image style={{top:90}}
      source={a.login}
      />
      </View>
    <View>
    <Text style={{top:120,marginLeft:15,fontWeight:'bold',fontSize:26,color:'#000000'}}>
    Login
     </Text>
     <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15
     }}
     placeholder='Email'
     />
     <TextInput style={{top:130,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15,marginTop:15
     }}
     placeholder='Password'
     />
     <Text style={{top:135,marginLeft:247,marginRight:15,fontWeight:'900',color:'#00401A'}}>
        Forget Password ?
     </Text>
     

    </View>
      <View style={{height:'5%',alignContent:'center',alignItems:'center',top:145,marginLeft:15,marginRight:15,backgroundColor:"#00401A",borderRadius:10}}>
        <Text style={{top:8,color:'#FFF'}}>
            Login
        </Text>
        <View style={{top:10}}>
        <Text style={{marginTop:20}}>
            OR
        </Text>
        </View>
        <View style={{top:20}}>
        <Text style={{color:'#000000'}}>
            Login With Google
        </Text>
        </View>
        <View style={{top:40}}>
        <Text style={{fontWeight:'900',color:'#000000'}}>
            Are you new ?
            <Text onPress = {()=>{
        navigation.navigate("signup")}} 

             style={{color:'#00401A'}}>
                Register
            </Text>
        </Text>
        
        </View>
      </View>
      
    </View>
  );
}

export default second