import React from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import styles from "./styles";
import StyleButton from "../StyledButtom";
const MessageItems = (props) => {
  const { image, name, tagline, tagline2 } = props.messages;

  return (
    <View style={styles.mContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titels}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitel}>
          {tagline}&nbsp;{" "}
          {/* &nbsp this means none breaking space or we can do this {" "} to have the space between the tow text */}
        </Text>
        <Text style={styles.subtitle2}>{tagline2}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyleButton
          type="primary"
          content={"Secret message"}
          onPress={() => {
            Alert.alert("Merci Pour tout Ines 💚 ");
          }}
        />
        <StyleButton
          type="secondary"
          content={"Another Secret message"}
          onPress={() => {
            Alert.alert("Trop d'émotions, Xav Ne pleure pas stp 🥺");
          }}
        />
      </View>
    </View>
  );
};
export default MessageItems;
