import React from 'react';
import {Text,View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ButtonCustom from './ButtonCustom';


const AlbumDetails = ({album}) => {

  const {title, artist, image, thumbnail_image, url} = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText, {fontSize: 22,fontWeight: 'bold'}]}>{title}</Text>
          <Text style={styles.headerText}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.mainImage} source={{uri: image}}/>
      </CardSection>
      <CardSection>
        <ButtonCustom onPress={() => Linking.openURL(url)}>BUY NOW</ButtonCustom>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  headerText: {
    paddingLeft: 5,
    color: '#000',
    fontWeight: '500'
  },
  mainImage: {
    flex: 1,
    height: 300,
    width: null,
  }
}

export default AlbumDetails;
