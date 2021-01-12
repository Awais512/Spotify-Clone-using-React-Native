import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { Albums } from '../../types';

export type AlbumProps = {
  album: Albums;
};

const Album = (props: AlbumProps) => (
  <View style={styles.container}>
    <Image source={{ uri: props.album.imageUri }} style={styles.image} />
    <Text style={styles.text}>{props.album.artistsHeadline}</Text>
  </View>
);

export default Album;
