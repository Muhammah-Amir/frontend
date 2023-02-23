import { View, Text, Image,TextInput} from 'react-native'
import React from 'react'
import { a } from '../assests/icon'


const third = () => {
  return (
    <View style={{height:'100%',width:'100%'}}>
        <View style={{alignContent:'center',alignItems:'center'}}>
      <Image style={{top:70}}
      source={a.signup}
      />
     
      </View>
      <View>
      <Text style={{top:110,marginLeft:15,fontWeight:'bold',fontSize:26,color:'#000000'}}>
    signup
     </Text>
      <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15
     }}
     placeholder='First Name'
     />
      <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15,marginTop:15
     }}
     placeholder='Last Name'
     />
      <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15,marginTop:15
     }}
     placeholder='Email'
     />
      <TextInput style={{top:128,borderWidth:1,borderRadius:10,marginLeft:15,marginRight:15,marginTop:15
     }}
     placeholder='Password'
     />
     
     </View>
     <View style={{height:'5%',alignContent:'center',alignItems:'center',top:145,marginLeft:15,marginRight:15,backgroundColor:"#00401A",borderRadius:10}}>
        <Text style={{top:8,color:'#FFF'}}>
            Login
        </Text>
        <View style={{top:40}}>
        <Text style={{fontWeight:'900',color:'#000000'}}>
            Already Account ?
            <Text style={{color:'#00401A'}}>
                Login
            </Text>
        </Text>
        
        </View>
        </View>
        
     
      
    </View>
  )
}

export default third