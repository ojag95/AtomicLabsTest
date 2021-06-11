import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import carouselData from "../../Data/CarouselData";
import { getTeamMembers } from "../../API/API";
import styles from "../../Constants/Styles";
import Footer from '../../Components/Footer'

const WelcomeScreen = ({navigation}) => {
    //Variables de estado
  const [activeIndex, setActiveIndex] = useState(0);
  const [carruselItems, setCarruselItems] = useState(carouselData);
  const [teamMembers, setTeamMembers] = useState([]);
  //Constantes de Dimensiones
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //Assets
  const background = require("../../assets/AtomicLabsAssets/MaskGroup1.png");
  const arrowButton = require("../../assets/AtomicLabsAssets/Group4013.png");
  const astronaut = require("../../assets/AtomicLabsAssets/Group4032.png");
  const people = require("../../assets/AtomicLabsAssets/Group4040.png");
  const logo = require("../../assets/AtomicLabsAssets/logo.png");
  //refs
  const ref = useRef(null);

  //Efecto para obtener los datos del Endpoint
  useEffect(() => {
    getData();
  }, []);

  //Funcion para obtener los datos del Endpoint y asignarlos a la variable de estado correspondiente
  const getData = async () => {
    let data = await getTeamMembers();
    setTeamMembers(data);
  };

  //Función para mostrar los miembros del equipo
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

  //Función para crear el los elementos del carrusel
  const renderCarouselItem = useCallback(
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
              <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('RegisterStepOne')}>
                <Text style={styles.buttonFont}>¡Quiero ser parte!</Text>
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
                renderItem={renderCarouselItem}
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
              <View style={{ alignItems: "center", marginTop: 30 }}>
                <Text style={{ textAlign: "center" }}>
                  <Text style={styles.text}>¡TE ENCANTARÁ </Text>
                  <Text style={styles.orangeText}>TRABAJAR CON NOSOTROS!</Text>
                </Text>
                <Image
                  source={people}
                  style={styles.imageBanner}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "row", marginBottom: 30 }}>
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
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('RegisterStepOne')}>
                  <Text style={styles.buttonFont}>¡Quiero ser parte!</Text>
                </TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
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
          <Footer/>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
