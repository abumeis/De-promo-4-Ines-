import React from "react";
import {  View, FlatList,Dimensions } from "react-native";
import styles from "./styles";
import messages from "./messages";
import MessageItems from "../MessageItems";

const MessaageList = (props) => {

  return (
    <View style={styles.container}>
      
      <FlatList data = {messages}
      renderItem = {({item})=> 
      <MessageItems messages={item}/>}
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
        
      ></FlatList>
     

    </View>
  );
};
export default MessaageList;
