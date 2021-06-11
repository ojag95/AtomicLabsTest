import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "../Constants/Styles";

function Footer() {
  //Assets
  const twitter = require("../assets/AtomicLabsAssets/twitter.png");
  const linkedin = require("../assets/AtomicLabsAssets/linkedin.png");
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
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
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
}

export default Footer;
