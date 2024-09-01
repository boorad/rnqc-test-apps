/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import crypto from 'react-native-quick-crypto';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Key size in bits
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });
  console.log('🚀 ~ test ~ privateKey:', privateKey);
  console.log('🚀 ~ test ~ publicKey:', publicKey);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.title}>React Native Quick Crypto</Text>
          <Text style={styles.label}>Private Key</Text>
          <TextInput
            style={[styles.textArea, styles.private]}
            value={privateKey?.toString()}
            multiline={true}
            editable={false}
          />
          <Text style={styles.label}>Public Key</Text>
          <TextInput
            style={[styles.textArea, styles.public]}
            value={publicKey?.toString()}
            multiline={true}
            editable={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    paddingVertical: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 24,
  },
  textArea: {
    fontSize: 8,
    fontWeight: '600',
    alignSelf: 'center',
    paddingTop: 24,
    height: 200,
  },
  private: {
    height: 300,
  },
  public: {
    height: 150,
  },
});

export default App;
