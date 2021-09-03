/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LiquidSwipe from './component/liquidSlider/LiquidSwipe';
import LESONS_1 from './component/LESON/UseTransition/lesons1';
import AnimatedTabs from './component/Animated_TABS/animated_tabs';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatedTabs />
    </SafeAreaView>
  );
};

export default App;
