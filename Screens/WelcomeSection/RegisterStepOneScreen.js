import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import * as yup from "yup";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import styles from "../../Constants/Styles";
import Steper from "../../Components/Steper";
import Footer from "../../Components/Footer";

const RegisterStepOneScreen = ({ route, navigation }) => {
  //Constantes de Dimensiones
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //Assets
  const background = require("../../assets/AtomicLabsAssets/MaskGroup1.jpg");
  const astronaut = require("../../assets/AtomicLabsAssets/Group4033.png");
  const logo = require("../../assets/AtomicLabsAssets/logo.png");

  const RenderForm = () => {
    return (
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={[styles.textColor, { fontSize: 16 }]}>Nombre (s)</Text>
        <Formik
          validationSchema={validador}
          initialValues={{ firstname: "", lastname: "" }}
          onSubmit={(values) => navigation.navigate("RegisterStepTwo", values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                name="firstname"
                placeholder="Ingresa tu nombre"
                style={styles.input}
                onChangeText={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname && (
                <Text style={styles.errorTextColor}>{errors.firstname}</Text>
              )}
              <Text style={[styles.textColor, { fontSize: 16 }]}>
                Apellidos
              </Text>
              <TextInput
                name="lastname"
                style={styles.input}
                placeholder="Ingresa tus apellidos"
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
              />
              {errors.lastname && touched.lastname && (
                <Text style={styles.errorTextColor}>{errors.lastname}</Text>
              )}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.orangeButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.orangeButtonFont}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  };

  const validador = yup.object().shape({
    firstname: yup
      .string()
      .min(
        3,
        ({ min }) => `El campo nombre debe tener al menos ${min} caracteres`
      )
      .required("El campo nombre no puede estar vacio"),
    lastname: yup
      .string()
      .min(
        3,
        ({ min }) => `El campo apellidos debe tener al menos ${min} caracteres`
      )
      .required("El campo apellido no puede estar vacio"),
  });

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
            <Steper activeItem={1} progress={30} />

            <View style={styles.rowCentered}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ff2500",
                    borderRadius: 60,
                    width: windowHeight / 12,
                    height: windowHeight / 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.textColor}>1</Text>
                </View>
              </View>
              <View style={{ flex: 3, marginBottom: 30 }}>
                <Text style={styles.textM}>TE QUEREMOS</Text>
                <Text style={styles.orangeTextM}>CONOCER</Text>
              </View>
            </View>
            <Text style={[styles.textColor, { fontSize: 16 }]}>
              Queremos saber que eres tú, por favor ingresa los siguientes
              datos:
            </Text>
            <RenderForm />

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

export default RegisterStepOneScreen;
