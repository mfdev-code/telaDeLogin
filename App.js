import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Button,
  Alert,
  Platform,
} from "react-native";
import Logo from "./assets/logoSEA.png";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#A9CAEB",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 110,
    width: 110,
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
  },
  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 37,
  },
  email: {
    marginBottom: 5,
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  senha: {
    marginBottom: 5,
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    padding: 10,
  },
  boxBottom: {
    height: Dimensions.get("window").height / 10,
    width: "80%",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 50,
    width: "100%",
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 12,
    color: "blue",
  },
});

export default function Login() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  const [titleText, setTitleText] = useState(
    "Novo por aqui? Clique para criar uma conta",
  );
  const onPressTitle = () => {
    setTitleText("Criando conta...");
  };

  function showAlert(message) {
    if (Platform.OS === "web") {
      window.alert(message);
    } else {
      Alert.alert(message);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.logo} source={Logo} />
        <Text style={style.title}>Bem-vindo(a) ao SEA!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.email}>Endereço de email:</Text>
        <TextInput
          style={style.input}npx 
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#fff"
        />
        <Text style={style.senha}>Senha:</Text>
        <TextInput
          style={style.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={style.boxBottom}>
        <Button
          title="Entrar"
          onPress={() =>
            showAlert(
              "Seja bem-vindo ao SEA, o app que vai orientar você a organizar seus estudos de maneira simples e divertida! Depois conta na avaliação o que achou <3",
            )
          }
        />
      </View>
      <View style={style.link}>
        <Text style={style.baseText}>
          <Text style={style.titleText} onPress={onPressTitle}>
            {titleText}
          </Text>
        </Text>
      </View>
    </View>
  );
}
