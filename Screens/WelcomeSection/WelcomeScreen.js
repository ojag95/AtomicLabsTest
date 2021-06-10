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
} from "react-native";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
const background = require("../../assets/AtomicLabsAssets/MaskGroup1.png");
const arrowButton = require("../../assets/AtomicLabsAssets/Group4013.png");
const astronaut = require("../../assets/AtomicLabsAssets/Group4032.png");
const people = require("../../assets/AtomicLabsAssets/Group4040.png");
const logo = require("../../assets/AtomicLabsAssets/logo.png");
const twitter = require("../../assets/AtomicLabsAssets/twitter.png");
const linkedin = require("../../assets/AtomicLabsAssets/linkedin.png");
import carouselData from "../../Data/CarouselData";
import { getTeamMembers } from "../../API/API";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WelcomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carruselItems, setCarruselItems] = useState(carouselData);
  const [teamMembers, setTeamMembers] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    getData();
    return () => {
      //
    };
  }, []);

  const getData = async () => {
    let data = await getTeamMembers();
    console.log(data);
    setTeamMembers(data);
  };

  const RenderTeamMembers = () => {
    return teamMembers.map((member) => (
      <View>
        <View style={styles.teamMemberCards}>
          <Image
            source={{ uri: member.photograph }}
            style={styles.imageAvatar}
            resizeMode="contain"
          />
          <Text
            style={[styles.textColor, { fontWeight: "bold", fontSize: 16 }]}
          >
            {member.name}
          </Text>
          <Text style={styles.textColor}>{member.area}</Text>
        </View>
      </View>
    ));
  };

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

  const renderItem = useCallback(
    ({ item, index }) => (
      <View style={styles.carouselItems}>
        <Image source={item.image} style={styles.imageMedium}></Image>
        <Text style={styles.text}>{item.title}</Text>
        <View>
          {item.description.map((item) => (
            <Text style={styles.textList}>
              {"\u25CF"}
              {"  "}
              {item}
            </Text>
          ))}
        </View>
      </View>
    ),
    []
  );

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
            <Text style={styles.text}>Desarrolla todo</Text>
            <Text style={styles.orangeText}>tu POTENCIAL</Text>
            <Text style={styles.text}>dentro del equipo</Text>
            <Text style={{ textAlign: "center" }}>
              <Text style={styles.orangeText}>ATOMIC</Text>
              <Text style={styles.text}>LABS</Text>
            </Text>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image source={arrowButton} style={styles.tinyImgButton}></Image>
              <Text style={styles.textColor}>Quiero saber más</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Image
                source={astronaut}
                style={styles.imageLarge}
                resizeMode="contain"
              ></Image>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "#397fb7", fontWeight: "bold" }}>
                  ¡Quiero ser parte!
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ textAlign: "center" }}>
                <Text style={styles.text}>SOMOS EL BRAZO DERECHO </Text>
                <Text style={styles.orangeText}>DE LA TECNOLOGÍA</Text>
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Carousel
                layout="stack"
                ref={ref}
                data={carruselItems}
                sliderWidth={windowWidth - 20}
                itemWidth={windowWidth - 20}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
              />
              <Pagination
                dotsLength={carruselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: "transparent" }}
                dotStyle={styles.activeDotStyles}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>
                  <Text style={styles.text}>¡TE ENCANTARÁ </Text>
                  <Text style={styles.orangeText}>TRABAJAR CON NOSOTROS!</Text>
                </Text>
                <Image
                  source={people}
                  style={styles.imageBanner}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      <Text style={styles.textColor}>Contratación remota</Text>
                      <Text style={styles.orangeTextSmall}>{"\u2794"}</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      <Text style={styles.textColor}>
                        Entrevista con el area de RH
                      </Text>
                      <Text style={styles.orangeTextSmall}>{"\u2794"}</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      <Text style={styles.textColor}>Prueba Practica</Text>
                      <Text style={styles.orangeTextSmall}>{"\u2794"}</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      <Text style={styles.textColor}>Entrevista técnica</Text>
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "#397fb7", fontWeight: "bold" }}>
                    ¡Quiero ser parte!
                  </Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ textAlign: "center" }}>
                    <Text style={styles.text}>NUESTRO </Text>
                    <Text style={styles.orangeText}>EQUIPO</Text>
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <RenderTeamMembers />
                </View>
              </View>
            </View>
          </View>
          <RenderFooter />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 50,
    justifyContent: "center",
  },
  socialIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  activeDotStyles:{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#ff2a00",
  },
  inactiveDotStyles:{
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#fff",
  }
});

export default WelcomeScreen;
