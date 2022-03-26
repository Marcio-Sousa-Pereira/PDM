import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Button,
  View,
} from "react-native";

export const IMCcomponent = () => {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [valor, setValor] = useState(0);

  const calcImc = () => {
    let IMC = (peso / (altura * altura)) * 10000;
    setValor(IMC.toFixed(1));
  };
  const ImageConponent = () => {
    <Image source="https://i.ytimg.com/vi/GWO-4FEuJAI/maxresdefault.jpg" />;
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Digite seu peso"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Digite seu peso"
        keyboardType="numeric"
      />
      {valor !== 0 && valor < 18.5 && (
        <Image
          style={styles.logos}
          source={{
            uri: "https://i.ytimg.com/vi/GWO-4FEuJAI/maxresdefault.jpg",
          }}
        />
      )}
      {valor >= 18.5 || valor < 25 && (
        <Image
          style={styles.logos}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg",
          }}
        />
      )}
      {valor >= 25 || valor < 30 && (
        <Image
          style={styles.logos}
          source={{
            uri: "http://pm1.narvii.com/6478/31ac1cc4b69f3bc6733883164ddfcb643acdaac4_00.jpg",
          }}
        />
      )}
      {valor >= 30 || valor < 35 && (
        <Image
          style={styles.logos}
          source={{
            uri: "https://static.wikia.nocookie.net/dragonball/images/e/e4/MajinBuuSuperNV..png/revision/latest?cb=20150121003048&path-prefix=pt-br",
          }}
        />
      )}
      {valor >= 35 || valor < 40 && (
        <Image
          style={styles.logos}
          source={{
            uri: "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2021/10/legiao_0Ovd7XqbTIos.png.jpeg",
          }}
        />
      )}
      {valor > 40 && (
        <Image
          style={styles.logos}
          source={{
            uri: "https://www.lance.com.br/files/article_main/uploads/2021/05/17/60a320101ca78.jpeg",
          }}
        />
      )}

      <Button title="CALCULAR" style={styles.button} onPress={calcImc} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  button: {
    borderRadius: 20,
    width: 200,
  },

  logos: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
});
