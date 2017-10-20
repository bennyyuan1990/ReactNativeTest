/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Picker,
  Button,
  ViewPagerAndroid
} from "react-native";
import { StackNavigator } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       language: null
//     };
//   }

//   render() {
//     return (
//       <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
//         <View style={styles.pageStyle}>
//           <Text>First page</Text>
//         </View>
//         <View style={styles.pageStyle}>
//           <Text>Second page</Text>
//         </View>
//       </ViewPagerAndroid>
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button onPress={() => navigate("Chat")} title="Chat with Lucy" />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: "Chat with Lucy"
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
 const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ff0000"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  picker: {
    color: "#444444",
    height: 30,
    backgroundColor: "green"
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  }
});
