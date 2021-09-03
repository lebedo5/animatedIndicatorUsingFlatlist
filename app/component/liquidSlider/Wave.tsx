import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

export enum Side {
  LEFT,
  RIGHT,
  NONE
}

interface WaveProps {
  side: Side;
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Wave = ({ side, children}: WaveProps) => {
  return <View style={StyleSheet.absoluteFill}>{children}</View>;
};

export default Wave;
