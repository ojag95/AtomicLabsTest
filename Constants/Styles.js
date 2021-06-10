import { Dimensions,  StyleSheet} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    containerSmallMargin: {
      marginLeft:10,
      marginRight:10,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
    },
    orangeText: {
      color: "#ff2a00",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
    },
    orangeTextSmall: {
      color: "#ff2a00",
      fontWeight: "bold",
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      alignContent: "space-between",
    },
    rowCentered: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    },
    rowItem: {
      flex: 1,
    },
    tinyXSButton: {
      width: 30,
      height: 30,
    },
    tinyImgButton: {
      width: 50,
      height: 50,
    },
    tinyImgLogo: {
      width: 100,
      height: 50,
    },
    imageLarge: {
      width: windowWidth - 30,
      height: windowWidth - 30,
    },
    imageBanner: {
      width: windowWidth - 30,
      height: windowHeight / 5,
      marginBottom: 10,
      marginTop: 10,
    },
    imageMedium: {
      width: windowWidth / 2,
      height: windowWidth / 2,
    },
    imageAvatar: {
      width: windowWidth / 2.5,
      height: windowWidth / 2.5,
      marginBottom: 25,
    },
    textColor: {
      color: "#fff",
    },
    textList: {
      color: "#fff",
      fontWeight: "normal",
      textAlign: "left",
      fontSize: 18,
    },
    teamMemberCards: {
      backgroundColor: "#0e509e",
      borderRadius: 5,
      padding: 25,
      alignItems: "center",
      width: windowWidth - 30,
      marginTop: 20,
    },
    footerStyle: {
      backgroundColor: "#000000",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: windowHeight / 4,
      padding: 20,
      marginTop: 70,
    },
    carouselItems: {
      backgroundColor: "#ff2a00",
      borderRadius: 5,
      padding: 50,
      marginLeft: 25,
      marginRight: 25,
      alignItems: "center",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 15,
      width: windowWidth / 2,
      height: windowHeight / 12,
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    buttonFont: {
      fontSize: 18,
      color: "#397fb7",
      fontWeight: "bold",
    },
    orangeButton: {
      alignItems: "center",
      backgroundColor: "#ff2a00",
      borderRadius: 30,
      width: windowWidth / 2,
      height: windowHeight / 12,
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    orangeButtonFont: {
      fontSize: 18,
      color: "#ffffff",
      fontWeight: "bold",
    },
    socialIcons: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    activeDotStyles: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: "#ff2a00",
    },
    inactiveDotStyles: {
      width: 5,
      height: 5,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: "#fff",
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderRadius:5,
      backgroundColor:'#fff',
      padding:10,
      marginTop:10,
      marginBottom:10
    },
  });

  export default styles;