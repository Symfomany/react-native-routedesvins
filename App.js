import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { Button } from "react-native";
import { Alert, ScrollView } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nb: 10 };
  }

  onPressLearnMore() {}
  render() {
    const src = {
      uri:
        "https://culturebox.francetvinfo.fr/sites/default/files/assets/images/2017/12/julmaxppp.jpg"
    };

    return (
      <View style={styles.container}>
        <Image source={src} style={{ width: 193, height: 110 }} />

        <Button
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
          title="Cliquez-moi"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <ScrollView>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Text style={{ fontSize: 96 }}>If you like</Text>
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Text style={{ fontSize: 96 }}>Scrolling down</Text>
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Text style={{ fontSize: 96 }}>What's the best</Text>
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Text style={{ fontSize: 96 }}>Framework around?</Text>
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Image source={require("./react-native/img/favicon.png")} />
          <Text style={{ fontSize: 90 }}>React Native</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
