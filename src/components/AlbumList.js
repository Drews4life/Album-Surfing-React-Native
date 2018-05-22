import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {

  state = {albums: []};

  async componentWillMount() {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    this.setState({albums: response.data});
  }

  renderAlbums () {
    return this.state.albums.map(album => <AlbumDetails key={album.title} album={album}/>);
  }

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
