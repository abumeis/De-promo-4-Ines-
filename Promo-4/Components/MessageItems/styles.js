import { Dimensions,StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    mContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
        backgroundColor: "black",

      },
      titels: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
        color: "white",



      },
      title: {
        fontSize: 40,
        fontWeight: "500",
        color: "white",
        paddingBottom:16

      },
      subTitel: {
        fontSize: 16,
        color: "#8861ff",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        paddingBottom:16

      },
      subtitle2:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        color: "#61ffd7",
      


      },
      image:{
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 50,
        width:"100%"
      }
})
export default styles