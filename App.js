//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';
import MenuScreen from './screens/MenuScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LogIn from './screens/LogIn'

export default function App() {
  return (
    <View style={styles.container}>
      
          <Text style={{fontSize:36, alignSelf:'center',backgroundColor:'blue',color:'white',width:1800,textAlign:'center'}}>S-StoryMart App</Text>

          <AppContainer/>
      
    </View>
  );
}


const TabNavigator=createBottomTabNavigator({
  WriteStory:{screen: WriteStory},
  ReadStory:{screen: ReadStory}},
  //MenuScreen:{screen: MenuScreen}},
  {
 
    defaultNavigationOptions :({navigation})=>({
  
      tabBarIcon: ()=>{
        const routeName=navigation.state.routeName;
        if(routeName==="WriteStory"){
          return(
            <Image
            source={require("./assets/write.jpg")}
            style={{alignSelf:'center',width:25 , height:25}}
            />
          )
        }
        else if(routeName==="ReadStory"){
          return( 
            <Image
            source={require("./assets/read.jpg")}
            style={{alignSelf:'center',width:25 , height:25}}
            />
          )
        }
        /*else if(routeName==="MenuScreen"){
          return( 
            <Image
            source={require("./assets/download.png")}
            style={{alignSelf:'center',width:25 , height:25}}
            />
          )
        }*/
      }
    
    })
 
  
  
  })

  const switchNavigator=createSwitchNavigator({

    LogIn:{screen:LogIn},
   TabNavigator:{screen:TabNavigator}
  
  })

  const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});
