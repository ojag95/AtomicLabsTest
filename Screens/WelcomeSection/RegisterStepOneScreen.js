import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";
import styles from "../../Constants/Styles";

const WelcomeScreen = () => {
  //Variables de estado
  const [nombre, setNombre] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  //Constantes de Dimensiones
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //Assets
  const background = require("../../assets/AtomicLabsAssets/MaskGroup1.png");
  const arrowButton = require("../../assets/AtomicLabsAssets/Group4013.png");
  const astronaut = require("../../assets/AtomicLabsAssets/Group4033.png");
  const people = require("../../assets/AtomicLabsAssets/Group4040.png");
  const logo = require("../../assets/AtomicLabsAssets/logo.png");
  const twitter = require("../../assets/AtomicLabsAssets/twitter.png");
  const linkedin = require("../../assets/AtomicLabsAssets/linkedin.png");
  const ref = useRef(null);

  //Función para mostrar el Footer
  const RenderFooter = () => {
    return (
      <View style={styles.footerStyle}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textColor}>
            © 2020 AtomicLabs. Todos los derechos reservados
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.textColor, { textDecorationLine: "underline" }]}>
            Aviso de Privacidad
          </Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity style={[styles.socialIcons, { marginRight: 15 }]}>
            <Image source={linkedin} style={styles.tinyXSButton}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginleft: 15,
            }}
          >
            <Image source={twitter} style={styles.tinyXSButton}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const RenderForm = () => {
    return (
      <View style={[styles.containerSmallMargin,{marginTop:30,marginBottom:30}]}>
        <Text style={[styles.textColor,{fontSize:16}]}>
              Queremos saber que eres tú, por favor ingresa los siguientes
              datos:
            </Text>
        <Text style={[styles.textColor, { fontSize:16 }]}>
          Nombre (s)
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          onChangeText={(texto) => setNombre(texto)}
          value={nombre}
        />
        <Text style={[styles.textColor, { fontSize:16 }]}>
          Apellidos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresa tus apellidos"
          onChangeText={(texto) => setApellidos(texto)}
          value={apellidos}
        />
        <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.orangeButton}>
                <Text style={styles.orangeButtonFont}>Enviar</Text>
              </TouchableOpacity>
            </View>   
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <ImageBackground source={background} style={styles.image}>
        <ScrollView>
          <View style={{ marginTop: 30 }}>
            <View style={styles.rowCentered}>
              <Image source={logo} style={styles.tinyImgLogo}></Image>
            </View>
            <Text style={styles.text}>TE QUEREMOS</Text>
            <Text style={styles.orangeText}>CONOCER</Text>
            
            <RenderForm/>
            
            <View style={{ alignItems: "center" }}>
              <Image
                source={astronaut}
                style={styles.imageLarge}
                resizeMode="contain"
              ></Image>
            </View>
          </View>
          <RenderFooter />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
