import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Steper = (props) => {
  const activeItem = props.activeItem;
  const progress = props.progress;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    separator: {
      height: 10,
      backgroundColor: "#ff2500",
      borderRadius: 10,
      width: ((windowWidth - 20) / 100) * progress,
      marginTop: -10,
    },
    separatorBg: {
      height: 10,
      backgroundColor: "rgba(255,255,255,0.6)",
      borderRadius: 10,
      width: windowWidth - 20,
    },
    activeOption: {
      backgroundColor: "#ff2500",
      borderRadius: 60,
      width: windowHeight / 16,
      height: windowHeight / 16,
      alignItems: "center",
      justifyContent: "center",
    },
    inactiveOption: {
      backgroundColor: "transparent",
      borderRadius: 60,
      width: windowHeight / 16,
      height: windowHeight / 16,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 3,
      borderColor: "#rgba(255,255,255,0.6)",
    },
    activeTextColor: {
      color: "#ffffff",
    },
    inactiveTextColor: {
      color: "#rgba(255,255,255,0.6)",
    },
  });
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
          <View
            style={
              activeItem === 1 ? styles.activeOption : styles.inactiveOption
            }
          >
            <Text
              style={
                activeItem === 1
                  ? styles.activeTextColor
                  : styles.inactiveTextColor
              }
            >
              1
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={
              activeItem === 2 ? styles.activeOption : styles.inactiveOption
            }
          >
            <Text
              style={
                activeItem === 2
                  ? styles.activeTextColor
                  : styles.inactiveTextColor
              }
            >
              2
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:10,marginBottom:20}}>
        <View style={styles.separatorBg}></View>
        <View style={styles.separator}></View>
      </View>
    </View>
  );
};

export default Steper;
