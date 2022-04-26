/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  Linking,
  Permission,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [phoneNumber, setPhoneNumber] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const callNumber = () => {
    console.log('call ----> ', phoneNumber);
    return Linking.openURL(`tel:${phoneNumber}`);
  };

  const sendSMS = () => {
    console.log('sms ----> ', phoneNumber);
    return Linking.openURL(`sms://${phoneNumber}`);
  };

  const openViber = () => {
    console.log('viber ----> ', phoneNumber);
    const number = phoneNumber.replace('+', '');
    return Linking.openURL(`viber://contact?number=%2B${number}`);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Learn More">
            Read the docs to discover what to do next:
            <View>
              <TextInput
                style={{height: 40}}
                placeholder="Enter Phone Number"
                onChangeText={newText => setPhoneNumber(newText)}
                defaultValue={phoneNumber}
                keyboardType="numeric"
              />
              <View style={styles.button}>
                <Button title="Call" onPress={() => callNumber()} />
              </View>
              <View style={styles.button}>
                <Button title="Send SMS" onPress={() => sendSMS()} />
              </View>
              <View style={styles.button}>
                <Button title="Open Viber" onPress={() => openViber()} />
              </View>
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    marginBottom: 15,
    // paddingBottom: 15,
    // height: 20,
  },
});

export default App;
