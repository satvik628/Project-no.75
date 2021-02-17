import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,Image,KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class LogIn extends React.Component{
    constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
      
    Login=async(email,password)=>{
      console.log(email);
            console.log(password)
         if(email&&password){
      try{
            console.log("inside email if")
            const response= await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log(response);
            if(response){
              console.log("inside resp if ")
              this.props.navigation.navigate('WriteStory')
            }
          }  
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                alert('incorrect email or password')
                console.log('invaild')
                break
            }
        } 
      }else{
            alert('Enter both emeil and password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
         <View>
                <Image
                        source={{uri:'data:image/jpeg;base64,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'}}
                        style={{ alignSelf: 'center', width: 250, height: 250,marginTop:0.1}}
                    />
                <Text style={{ fontSize: 36, alignSelf: 'center',marginTop:1 }}>Please LOG IN TO APP</Text>
        
                <View>
        <TextInput
          style={styles.loginBox}
          placeholder="Enter-storyapp@whjr.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBoxNew}
          secureTextEntry = {true}
          placeholder="enter Password (storyApp)"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        <View>
          <TouchableOpacity /*style={{}}*/
          onPress={()=>{
            this.Login(this.state.emailId ,this.state.password)}}>
            <Text style={{height:40,width:440,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7,alignSelf:'center',textAlign:'center',backgroundColor:'blue',color:'white',fontSize:24}}>Log in to app</Text>
          </TouchableOpacity>

        </View>
         </View>
         </KeyboardAvoidingView>

        )
    }

}


const styles=StyleSheet.create({
loginBox:{
   width:800,
   alignSelf:'center',
   height:40,
   borderRadius:20,
   textAlign:'center',
   marginTop:30,
   borderWidth:1,

},
loginBoxNew:{
    width:800,
   alignSelf:'center',
   height:40,
   borderRadius:20,
   textAlign:'center',
   marginTop:30,
   borderWidth:1,

}


})