import * as React from 'react';
import { StyleSheet } from 'react-native';
import Album from '../components/Album';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const album = {
  id: '1',
  imageUrl:
    'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
