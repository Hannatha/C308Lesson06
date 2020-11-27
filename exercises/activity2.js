import * as React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';

const styles2 = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 30,
  },
  boxText: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
});
const Activity2 = () => {
  return (
    <View>
      <ImageBackground
        source={require('./images/flames_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <Text style={[styles2.title, styles2.boxText, styles2.greenBox]}>
          Who We Are
        </Text>
        <Text style={[styles2.boxText, styles2.greenBox]}>Our People</Text>
        <Text style={[styles2.boxText, styles2.greenBox]}>Our Campus</Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 50,
            textAlign: 'center',
            marginTop: -100,
          }}>
          Inside
        </Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </ImageBackground>
    </View>
  );
};

export default Activity2;
