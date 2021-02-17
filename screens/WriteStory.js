import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,ToastAndroid } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import db from '../config.js';


export  default class WriteStory extends React.Component{



  
constructor(){
    super();
    this.state={
    title:'',
    author:'',
    story:'',
    submitMessagae:''
    }
}
submitStory = async()=>{

  this.setState({
    submitMessagae:' Congrats ! Your story is published in app publically '
  })
  


    db.collection('stories').add({
      
         author:this.state.author,
         title:this.state.title,
         story:this.state.story,
         storyType:"Submitted"
     }); 
     
    alert("Congrats ! Your story is published in app publically"); 
     
 }
 //ToastAndroid.show(this.state.submitMessagae,ToastAndroid.SHORT); 
render(){

    
  
    
    return(

      <KeyboardAvoidingView  style={styles.container} behaviour="padding" enabled>

        
   <ScrollView>
     <Text style={{fontSize:36,alignSelf:'center'}}>WELCOME TO WRITE SCREEN</Text>

   
    <TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:100,border:'solid'}}
              placeholder="Title"
              onChangeText={(text) => {
                this.setState({
                  title: text,
                });
              }}
              
              />

<TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:10,border:'solid'}}
              placeholder="Author"
              onChangeText={(text) => {
                this.setState({
                  author: text,
                });
              }}
              />

<TextInput 
              style={{width:800,marginLeft:370,height:300,/*borderRadius:50,textAlign:'center',*/marginTop:10,border:'solid'}}
              placeholder="Story"
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  story: text,
                });
              }}
              
              />
              <TouchableOpacity 
               
              onPress={this.submitStory}
              >
                  <Text style={{marginTop:10,alignSelf:'center',width:200,backgroundColor:'black',color:'white',fontSize:18,borderRadius:20}}>              Publish</Text>
              </TouchableOpacity>
   </ScrollView>

</KeyboardAvoidingView>
    )
    
}

}

const styles=StyleSheet.create({
  container: {
    marginTop: 1,

}

})