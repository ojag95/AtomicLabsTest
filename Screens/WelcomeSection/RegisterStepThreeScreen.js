import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "../../Constants/Styles";
import Footer from "../../Components/Footer";

const RegisterStepThreeScreen = ({ navigation }) => {
  //Assets
  const background = require("../../assets/AtomicLabsAssets/MaskGroup1.jpg");
  const astronaut = require("../../assets/AtomicLabsAssets/Group4039.png");
  const logo = require("../../assets/AtomicLabsAssets/logo.png");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <ImageBackground source={background} style={styles.image}>
        <ScrollView>
          <View style={[styles.containerSmallMargin, { marginTop: 30 }]}>
            <View style={styles.rowCentered}>
              <Image source={logo} style={styles.tinyImgLogo}></Image>
            </View>

            <View style={styles.rowCentered}>
              <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text style={{ textAlign: "center" }}>
                  <Text style={styles.textM}>TUS DATOS HAN SIDO</Text>
                  <Text style={styles.orangeTextM}> ENVIADOS CON ÉXITO</Text>
                </Text>
              </View>
            </View>
            <Text style={[styles.textColor, { fontSize: 16 }]}>
              En breve recibirás un correo de confirmación por parte del equipo
              de AtomicLabs.
            </Text>
            <Text style={[styles.textColor, { fontSize: 16 }]}>
              Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
            </Text>

            <View style={{ alignItems: "center" }}>
              <Image
                source={astronaut}
                style={styles.imageLarge}
                resizeMode="contain"
              ></Image>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RegisterStepThreeScreen;
