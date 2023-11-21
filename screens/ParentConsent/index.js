import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, CheckBox, Linking } from 'react-native';

const ParentalConsentScreen = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSend = () => {// Handle sending email logic here
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Parental Consent Required</Text>
      <Text style={styles.text}>
        We collect certain information from your child's profile and by the Admin. Please review our privacy policy.
      </Text>
      <Button title="Review Privacy Policy" onPress={() => Linking.openURL('https://your-privacy-policy-url.com')} />
      <View style={styles.checkboxContainer}>
        <CheckBox value={agree} onValueChange={setAgree} style={styles.checkbox} />
        <Text style={styles.label}>I agree to the privacy policy</Text>
      </View>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Please provide your email address" />
      <Button title="Send" onPress={handleSend} />
      <Text style={styles.text}>
        We will send you a token to the provided email address. Please add it to verify your consent. All changes to the profile will be sent to this email as well.
      </Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8
  }
});
export default ParentalConsentScreen;