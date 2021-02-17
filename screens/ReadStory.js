import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config.js';
import * as firebase from 'firebase';
//import { TextInput } from 'react-native-gesture-handler';


export  default class ReadStory extends React.Component{
    constructor(){
        super();
        this.state={
        search:'',
        allTransactions:[],
        lastVisibleTransaction:null,
       
        }
    }

    fetchMoreTransactions = async () => {
      var text = this.state.search.toUpperCase();
      var enteredText = text.split('');
  
      if (enteredText[0].toUpperCase() === 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z') {
        const query = await db
          .collection('stories')
          .where('author', '==', text)
          .startAfter(this.state.lastVisibleTransaction)
          .limit(10)
          .get();
        query.docs.map((doc) => {
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
            lastVisibleTransaction: doc,
          });
        });
      } else if (enteredText[0].toUpperCase() === 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z') {
        const query = await db
          .collection('stories')
          .where('title', '==', text)
          .startAfter(this.state.lastVisibleTransaction)
          .limit(10)
          .get();
        query.docs.map((doc) => {
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
            lastVisibleTransaction: doc,
          });
        });
      }
    };





    
      searchTransactions = async (text) => {
       // console.log('In search transactions');
        var enteredText = text.split('');
        if (enteredText[0].toUpperCase() === 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z') {
          //console.log('In search transactions- book');
          const transaction = await db
            .collection('stories')
            .where('author', '==', text)
            .get();
          transaction.docs.map((doc) => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc,
            });
          });
         // console.log(this.state.allTransactions)
        } else if (enteredText[0].toUpperCase() === 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z') {
            //console.log('In search transactions- student');
          const transaction = await db
            .collection('stories')
            .where('title', '==', text)
            .get();
          transaction.docs.map((doc) => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc,
            });
          });
        }
      };
    
    

render(){
    return(
   <View>
<Text style={{fontSize:36,alignSelf:'center'}}>WELCOME TO READ SCREEN</Text>
<View style={styles.searchBar}>

    <TextInput
  
        placeholder="Search here Author name or title...."
        style={styles.SearchBar}
        onChangeText={(text) => {
            this.setState({
              search: text,
            });
          }}
        value={this.state.search}
      />
       <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.searchTransactions(this.state.search);
            }}>
           
            <Text>Search</Text>
          </TouchableOpacity>
          </View>

          <FlatList
          data={this.state.allTransactions}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 2,backgroundColor:'pink',color:'white',height:60,marginTop:10 }}>
              <Text>{'TITLE OF STORY: ' + item.title}</Text>
              <Text>{'Author : ' + item.author}</Text>
             
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        />
   </View>

    )
}

}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
SearchBar:{
  flexDirection:'row',
   height: 40,
    marginTop: 2,
    marginLeft: 30,
    width: 1080,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 3,
    textAlign: 'center',
    //alignSelf:'center',
    color:'blue',
    justifyContent:'center'
},
searchBar: {
  flexDirection: 'row',
  height: 40,
  width: 'auto',
  borderWidth: 0.5,
  alignItems: 'center',
  width:1080,
  border:'0px',
  
  
  //backgroundColor:'blue',
  //color:'white'
},
searchButton:{
  backgroundColor:'skyblue',
  color:'white',
 // marginLeft:40,
  borderRadius:20,
  textAlign:'center',
  width:160,
  height:20,
  alignItems: 'center',
  justifyContent: 'center',
}

})