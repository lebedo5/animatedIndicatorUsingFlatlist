import {ScrollView, StyleSheet} from 'react-native';
import Item, {MAX_HEIGHT} from './Item';
import {items} from './Model';

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: 'black',
  },
});

const Channel = () => {
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => {
        <Item item={item} key={index} />;
      })}
    </ScrollView>
  );
};
export default Channel;
