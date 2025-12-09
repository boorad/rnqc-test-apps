/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import crypto from 'react-native-quick-crypto';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent isDarkMode={isDarkMode} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent({ isDarkMode }: { isDarkMode: boolean }) {
  const backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const inputBorderColor = isDarkMode ? '#333333' : '#CCCCCC';

  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });
  console.log('🚀 ~ privateKey:', privateKey);
  console.log('🚀 ~ publicKey:', publicKey);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text style={[styles.title, { color: textColor }]}>
        React Native Quick Crypto
      </Text>

      <Text style={[styles.label, { color: textColor }]}>Private Key</Text>
      <TextInput
        style={[
          styles.textArea,
          styles.private,
          {
            color: textColor,
            borderColor: inputBorderColor,
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
          },
        ]}
        value={privateKey?.toString()}
        multiline={true}
        editable={false}
      />

      <Text style={[styles.label, { color: textColor }]}>Public Key</Text>
      <TextInput
        style={[
          styles.textArea,
          styles.public,
          {
            color: textColor,
            borderColor: inputBorderColor,
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
          },
        ]}
        value={publicKey?.toString()}
        multiline={true}
        editable={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  textArea: {
    fontSize: 8,
    fontFamily: 'Courier',
    marginHorizontal: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  private: {
    height: 300,
  },
  public: {
    height: 150,
    marginBottom: 24,
  },
});

export default App;
