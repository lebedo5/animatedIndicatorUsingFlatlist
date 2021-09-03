import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useMemoOne} from 'use-memo-one';
import Animated, {
  Value,
  useCode,
  set,
  Clock,
  block,
  cond,
  not,
  clockRunning,
  startClock,
  interpolate,
  Extrapolate,
  add,
  stopClock,
  eq,
} from 'react-native-reanimated';
import Card from '../Card';

const duration = 2000;

const LESONS_1 = () => {
  const [show, setShow] = useState(true);
  const {time, clock, progress} = useMemoOne(
    () => ({
      time: new Value(0),
      progress: new Value(0),
      clock: new Clock(),
    }),
    [],
  );
  // const time = new Value(0);
  // const progress = new Value(0);
  // const clock = new Clock();

  // @ts-ignore
  const opacity = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: show ? [0, 1] : [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(
    block([
      /*
       1. If the clock is not running,
       start the clock and save the original clock value in the time
        if(!clockingRunning(clock)) {} the same like in the bottom function
      */
      cond(not(clockRunning(clock)), [startClock(clock), set(time, clock)]),
      //  2. Calculate the progress of the animation
      set(
        progress,
        interpolate(clock, {
          inputRange: [time, add(time, duration)],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP,
        }),
      ),
      //  3. If the animation is over, stop the clock
      cond(eq(progress, 1), stopClock(clock))
    ]),
    [show]
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{opacity}}>
          <Card />
        </Animated.View>
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
    marginBottom: 90,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LESONS_1;
