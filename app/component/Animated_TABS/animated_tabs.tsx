import React, { useCallback, useEffect, useRef, useState } from "react";
import {observer} from 'mobx-react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  StatusBar,
  Image,
  findNodeHandle, TouchableOpacity
} from "react-native";
const images = {
  man: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const data = Object.keys(images).map(i => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef()
}));
const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_,i) => i * width)
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  })
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  })
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        left: 0 ,
        backgroundColor: 'white',
        bottom: -10,
        borderRadius: 2,
        transform: [
          {
            translateX
          }
        ]
      }}
    />
  );
};

const Tab = React.forwardRef(({item, onItemPress}, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
})

const Tabs = ({ datas, scrollX, onItemPress}) => {
  const [measures, setMeasures] = useState([])
  const currentRef = useRef()
  useEffect(() => {
    const m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(currentRef.current, (x, y, width,height) => {
        m.push({
          x, y, width, height
        })

        if(m.length === data.length) {
          setMeasures(m)
        }
      } )
    })
  }, [])

  return (
    <View style={{position: 'absolute', top: 100, width}}>
      <View
        ref={currentRef}
        style={{justifyContent: 'space-evenly', flex: 1, flexDirection: 'row'}}>
        {datas.map((item, index) => {
          return <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)}/>;
        })}
      </View>
      {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}
    </View>
  );
};

const {width, height} = Dimensions.get('screen');

const AnimatedTabs = observer(() => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef()
  const onItemPress = useCallback(itemIndex => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width
    })
  })
  return (
    <View style={styles.container}>
      <StatusBar />
      <Animated.FlatList
        pagingEnabled={true}
        data={data}
        ref={ref}
        keyExtractor={item => item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        bounces={false}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.image}}
                style={{flex: 1, resizeMode: 'cover'}}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {backgroundColor: 'rgba(0,0,0,0.3)'},
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs datas={data} scrollX={scrollX} onItemPress={onItemPress}/>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedTabs;
