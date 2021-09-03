import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
const card_pattern = require('./card_pattern.png');
const Card = () => {
  return (
    <View style={{width: 350, height: 250, overflow: 'hidden', borderRadius: 15}}>
      <Image resizeMode={'cover'} source={card_pattern} />
    </View>
  );
};
export default Card;
