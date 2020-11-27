import React from 'react';
import {View, Button, Alert} from 'react-native';

const Activity4 = () => {
  return (
    <View>
      <Button
        onPress={() => {
          Alert.alert('Hi There!');
        }}
        title="Confirm"
      />
    </View>
  );
};

export default Activity4;
