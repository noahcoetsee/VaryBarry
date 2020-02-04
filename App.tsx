import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Audio } from 'expo-av';

import * as Font from 'expo-font';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  hello;
  
  async componentDidMount() {
    await Font.loadAsync({
      'Ruluko': require('./assets/fonts/Ruluko-Regular.ttf'),
    });

    // this.hello = new Sound('happybirthday.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if(error) {
    //     console.log('Failed to load happybirthday.mp3', error);
    //     return;
    //   }
    // });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.header}>Vary Barry</Text>
          ) : null
        }
        
        <Image 
          style={styles.barry}
          source={require('./assets/BarryLindler.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: 324,
    height: 95,
    top: 100,
    fontFamily: 'Ruluko',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 72,
    lineHeight: 83,
    textAlign: 'center',
    color: '#000'
  },
  barry: {
    top: -69,
    width: 250,
    height: 300
  }
});
