/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.highlight}>Midi Player</Text>
          </View>
          <View style={styles.body}>
            <TouchableOpacity style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Load SF2 (it's in ./assets/MotifES6ConcertPiano.sf2)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Load MIDI (it's in ./assets/tt.mid)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>Play MIDI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>Stop MIDI</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              EventListener: - midi file finished playing
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  description: {
    marginTop: 40,
    textAlign:'center'
  },
  body: {
    backgroundColor: Colors.white,
    padding: 20,
  },
  sectionContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
