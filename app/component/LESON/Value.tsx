import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default () => {
  const [show, setShow] = useState(true);
  const opacity = show ? 1 : 0;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{opacity}} />
      </View>
      <Button
        title={show ? 'Hide' : 'Show'}
        onPress={() => setShow(prev => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
