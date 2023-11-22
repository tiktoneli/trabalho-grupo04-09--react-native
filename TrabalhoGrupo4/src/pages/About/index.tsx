import { View, Text, Image, ScrollView, Alert, StatusBar } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Footer } from "../../components/Footer";
import LogoTeamHero from "../../assets/Images/TeamHeroesLogo.png";
import { CardAbout } from "../../components/CardAbout";
import prof from '../../assets/Images/prof.png'

const About = () => {
  return (
    <View style={styles.viewContainer}>
      <StatusBar />
      <ScrollView accessibilityLabel="Rolagem">
        <View style={styles.viewContent}>
          <Image source={LogoTeamHero} style={styles.logo} />

          <Text style={styles.text}>Obrigado por usar nossos serviços!</Text>
          <Text style={styles.text}>A TEAMHEROES é:</Text>
          <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
            <CardAbout
              image= {prof}
              nome="Raynan Titoneli"
              urlGit="https://github.com/tiktoneli"
            />
            <CardAbout
            image= {prof}
              nome="Adilson Fernando"
              urlGit="https://github.com/Adilson-Fernando-Neves-Ornellas"
            />
          </View>
          <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
            <CardAbout
            image= {prof}
              nome="Elaine Dutra"
              urlGit="https://github.com/Elaine-Dutra"
            />
            <CardAbout
            image= {prof}
              nome="Luan Terra"
              urlGit="https://github.com/LuanTerra-Apollo"
            />
          </View>
          <View style={{ margin: 10, flex: 1, flexDirection: "row"}}>
            <CardAbout
            image= {prof}
              nome="Taynara Aguiar"
              urlGit="https://github.com/tayaguiar"
            />
            <CardAbout
            image= {prof}
              nome="Douglas Maia"
              urlGit=""
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default About;
