import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Activity1 = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>RP Values</Text>
      <Text style={{color: 'green'}}>Excellence</Text>
      <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
      <Text style={{fontStyle: 'italic'}}>Integrity</Text>
      <Text style={{textAlign: 'center'}}>Teamwork</Text>
      <Text style={{color: 'white', backgroundColor: 'black'}}>
        Enterprising
      </Text>
      <Text style={[styles.background, styles.accentText]}>Children</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  background: {
    backgroundColor: '#99CCFF',
  },
  accentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Activity1;
