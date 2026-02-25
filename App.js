import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  const [email, botarEmail] = React.useState("");
  const [senha, botarSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
        }}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={botarEmail} />

      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={botarSenha} />

      <Button
        title="                          Login                          "
        onPress={() => navigation.navigate("Contato")}
      />

      <Text style={styles.iconeEscondidor}> Espaco para esconder </Text>

      <Button
        color={"red"}
        title="                   Cadastrar-se                   "
        onPress={() => navigation.navigate("Usuário")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function CadastroScreen({ navigation }) {
  const [email, botarEmail] = React.useState("");
  const [senha, botarSenha] = React.useState("");
  const [nome, botarNome] = React.useState("");
  const [cpf, botarCPF] = React.useState("");
  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={botarNome} />
      <Text style={styles.text}>CPF</Text>
      <TextInput style={styles.input} value={cpf} onChangeText={botarCPF} />

      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={botarEmail} />

      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={botarSenha} />

      <Button
        title="                    Cadastrar                    "
        onPress={() => Alert.alert("Cadastro")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function ContatoScreen({ navigation }) {
  const user1 = {
    nome: "João Guilherme Lopes Fonseca",
    numero: "81 9 12345678",
  };
  const user2 = { nome: "Ishmael Talicious fish", numero: "81 9 23456678" };
  const user3 = { nome: "Natalia Bernand Fonseca", numero: "81 9 33344455" };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ScrollView horizontal style={styles.item}>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>{user1.nome}</Text>
            <Text style={styles.text1}>{user1.numero}</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.item}>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>{user2.nome}</Text>
            <Text style={styles.text1}>{user2.numero}</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.item}>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>{user3.nome}</Text>
            <Text style={styles.text1}>{user3.numero}</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

function CadastroContatosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Help screen</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

function AltDelScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Help screen</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Usuário"
          component={CadastroScreen}
          options={{
            headerStyle: {
              backgroundColor: "#4594f1",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#fff",
              fontSize: 28,
            },
          }}
        />
        <Stack.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            headerStyle: {
              backgroundColor: "#4594f1",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#fff",
              fontSize: 28,
            },
          }}
        />
        <Stack.Screen name="ContatoCad" component={CadastroContatosScreen} />
        <Stack.Screen name="AltDel" component={AltDelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6ddd7",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  container3: {
    flex: 1,
    alignItems: "center",
  },
  definition: {
    height: 80,
  },
  item: {
    height: 80,
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  icon: {
    width: 80,
    height: 80,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 80,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  headerMen: {
    fontSize: 45,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  text: {
    fontSize: 24,
    marginRight: 185,
    color: "#000000",
  },
    text1: {
    fontSize: 20,
    marginRight: 185,
    color: "#000000",
  },
  senha: {
    fontSize: 24,
    color: "#fff",
  },
  iconeEscondidor: {
    color: "#e6ddd7",
  },
});

export default App;
