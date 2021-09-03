import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Wave, {Side, WIDTH} from './Wave';
// import SlideProps from './Slide';

// const PREV = WIDTH;
// const NEXT = 0;

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

const Slider = ({
  children: current,
  prev,
  next,
}: SliderProps) => {
  return (
    <View style={StyleSheet.absoluteFill}>
     {/*<Text style={{ fontSize: 40, color: "black" }}>advdvdfvdfv</Text>*/}

      {/*<View> {current} </View>*/}
      {/*{prev && (*/}
      {/*  <View style={StyleSheet.absoluteFill}>*/}
      {/*    <Wave side={Side.LEFT}>{prev}</Wave>*/}
      {/*  </View>*/}
      {/*)}*/}
      {/*{next && (*/}
      {/*  <View style={StyleSheet.absoluteFill}>*/}
      {/*    <Wave side={Side.RIGHT}>{next}</Wave>*/}
      {/*  </View>*/}
      {/*)}*/}
    </View>
  );
};

export default Slider;
