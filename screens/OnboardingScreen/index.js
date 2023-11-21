import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Welcome to our app! Here is feature 1.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'This is feature 2. It helps you do X.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Finally, this is feature 3. Enjoy!'
  }];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.carousel}>
        <Image source={{
        uri: slides[currentSlide].image
      }} style={styles.image} />
        <Text style={styles.text}>{slides[currentSlide].text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  }
});
export default OnboardingScreen;