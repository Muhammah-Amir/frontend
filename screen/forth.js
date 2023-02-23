import { View, Text,Image ,TextInput} from 'react-native'
import React from 'react'
import { a } from '../assests/icon'


const forth = () => {
  return (
    <View style={{height:'100%',width:'100%'}}>
         <View style={{alignContent:'center',alignItems:'center'}}>
      <Image style={{top:90}}
      source={a.forget}
      />
      </View>
      <View>
      <Text style={{top:110,marginLeft:15,fontWeight:'bold',fontSize:26,color:'#000000',marginTop:20}}>
    Forget
     </Text>
     <Text style={{top:106,marginLeft:15,fontWeight:'bold',fontSize:26,color:'#000000'}}>
    Password?
     </Text>
     <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15
     }}
     placeholder='Email/Mobile No'
     />
     </View>
     <View style={{height:'5%',alignContent:'center',alignItems:'center',top:350,marginLeft:15,marginRight:15,backgroundColor:"#00401A",borderRadius:10}}>


     <Text style={{top:8,color:'#FFF'}}>
            Login
        </Text>
     </View>
      
      
    </View>
  )
}

export default forth