import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import styles from "./style";
const StyleButton = (props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === 'primary' ? '#2F88E0' : '#20CC5E';
  const textColor = type === 'primary' ? '#FFFFFF' : '#030204';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={() => onPress() }
      >
        <Text style={[styles.Text,{color:textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default StyleButton;
