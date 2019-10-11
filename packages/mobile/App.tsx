/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import useTimeout from '@monorepo-example-local/core/hooks/useTimeout';

import CORE_CONSTS from '@monorepo-example-local/core/constants';
import THEME_CONSTS from '@monorepo-example-local/theme/constants';

const App = () => {
  const [message, setMessage] = useState('Message will change in 2 seconds...')
  useTimeout(() => setMessage('Yup changed!'), 2000)

  return (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Constant from "@monorepo-example-local/core" =>
            {CORE_CONSTS.NORMAL_CONSTANT}
          </Text>
          <Text style={styles.sectionTitle}>
            Constant from "@monorepo-example-local/theme" =>
            {THEME_CONSTS.Color.RED}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {message}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  </>
)};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
