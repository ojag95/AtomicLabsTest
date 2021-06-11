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
  ActivityIndicator,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { Dimensions } from "react-native";
import styles from "../../Constants/Styles";
import Steper from "../../Components/Steper";
import { postNewMemberData } from "../../API/API";
import Footer from '../../Components/Footer'


const RegisterStepTwoScreen = ({ route, navigation }) => {
  //Variables de estado
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  //Constantes de Dimensiones
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //Assets
  const background = require("../../assets/AtomicLabsAssets/MaskGroup1.png");
  const astronaut = require("../../assets/AtomicLabsAssets/Group4034.png");
  const logo = require("../../assets/AtomicLabsAssets/logo.png");
  //Constantes
  const parametros = route.params !== undefined ? route.params : {};

  //Funcion para renderizar el formulario, la validación de datos se hace con Formik usando el validador creado con yup
  const RenderForm = () => {
    return (
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <Text style={[styles.textColor, { fontSize: 16 }]}>
          Número de celular
        </Text>
        <Formik
          validationSchema={validador}
          initialValues={{ cellphone: "" }}
          onSubmit={(values) => handleNextScreen(values)}
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
                name="cellphone"
                placeholder="Número de celular"
                style={styles.input}
                onChangeText={handleChange("cellphone")}
                onBlur={handleBlur("cellphone")}
                value={values.cellphone}
                keyboardType="phone-pad"
              />
              {errors.cellphone && touched.cellphone && (
                <Text style={styles.errorTextColor}>{errors.cellphone}</Text>
              )}

              <View style={{ alignItems: "center" }}>
                {isLoading ? (
                  <View>
                    <ActivityIndicator size="large" color="#ff2500" />
                    <Text style={styles.textColor}>Cargando...</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.orangeButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.orangeButtonFont}>Continuar</Text>
                  </TouchableOpacity>
                )}
                {error !== null ? (
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#ff2500",
                      width: windowWidth - 20,
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <View style={{ flex: 4 }}>
                      <Text style={styles.textColor}>{error}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setError(null)}
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={[styles.textColor, { fontSize: 24 }]}>
                        x
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  };

  const validador = yup.object().shape({
    cellphone: yup
      .string()
      .min(10, ({ min }) => `El campo debe tener al menos ${min} digitos`)
      .max(10, ({ max }) => `El campo no puede tener mas de ${max} digitos`)
      .required("El campo telefono no puede estar vacio"),
  });

  const handleNextScreen = (formdata) => {
    let userData = parametros;
    userData.cellphone = formdata.cellphone;
    sendData(userData);
  };

  const sendData = async (data) => {
    setIsLoading(true);
    let response = await postNewMemberData(data);
    setIsLoading(false);
    if (response.success) {
      navigation.navigate("RegisterStepThree");
    } else if (response.status === "error") {
      setError(response.message);
    } else {
      alert("Nadie debería llegar aquí, si ves esto encontraste un bug :(");
    }
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
          <View style={[styles.containerSmallMargin, { marginTop: 30 }]}>
            <View style={styles.rowCentered}>
              <Image source={logo} style={styles.tinyImgLogo}></Image>
            </View>
            <Steper activeItem={2} progress={100} />

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
                  <Text style={styles.textColor}>2</Text>
                </View>
              </View>
              <View style={{ flex: 3, marginBottom: 30 }}>
                <Text style={styles.textM}>VALIDA TU</Text>
                <Text style={styles.orangeTextM}>CELULAR</Text>
              </View>
            </View>
            <Text style={[styles.textColor, { fontSize: 16 }]}>
              Necesitamos validar tu número para continuar
            </Text>
            <Text style={[styles.textColor, { fontSize: 16 }]}>
              Ingresa tu número a 10 digitos y te enviaremos un código SMS
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

export default RegisterStepTwoScreen;
