import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';



export  default class MenuScreen extends React.Component{
link=()=>{
    <Link to="https://reactnavigation.org/docs/link/"> GO</Link>
}


render(){
    
   
    return(

   <View>
    <Text style={{fontSize:18 , color:'red'}}> OOps! Screen is not available seems it is under development </Text>

    <TouchableOpacity onPress={this.link}>
                  <Text style={{marginTop:100,alignSelf:'center',width:1000,backgroundColor:'black',color:'white',fontSize:18,borderRadius:20}}>                                                                            Share About App with friends</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                  <Text style={{marginTop:100,alignSelf:'center',width:1000,backgroundColor:'black',color:'white',fontSize:18,borderRadius:20}}>                                                                            DOCUMENTATION RELATED TO App</Text>
              </TouchableOpacity>
   </View>

    )
}

}