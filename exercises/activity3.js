import React from 'react';
import {View, StyleSheet, Button, ImageBackground, Alert} from 'react-native';

const styles3 = StyleSheet.create({
  boxStyle: {
    width: 150,
    height: 150,
    padding: 20,
    backgroundColor: '#00629e',
  },
});
const Activity3 = () => {
  return (
    <ImageBackground
      source={require('./images/flames_bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles3.boxStyle}>
        <Button
          color="#f9769a"
          onPress={() => {
            Alert.alert('Hello World!');
          }}
          title="Press Me"
        />
      </View>
    </ImageBackground>
  );
};

export default Activity3;
