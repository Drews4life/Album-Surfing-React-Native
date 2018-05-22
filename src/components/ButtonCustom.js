import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={styles.container}>
      <Text style={styles.txt}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex:1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#C5EFF7',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 20,
  }
}

export default ButtonCustom;
