import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
  
} from 'react-native'
import { connect } from 'react-redux';
import { addGame } from './actions/game';
class GameForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: '#000000',
    },
  };
  state = {
    game: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('./assets/logo2.png')}
        />
        <Text style={styles.title}>Add Best Games To Play</Text>
        <TextInput
          value={this.state.game}
          placeholder='Name'
          style={styles.gameInput}
          onChangeText={(game) => this.setState({ game })}
        />
          <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            this.props.add(this.state.game)
            this.setState({ game: null })
          }}>
          <Text style={{ fontSize: 22, color: '#04d9ff' }}>Add to Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}

          onPress={() =>
            this.props.navigation.navigate('GameList')}>
            <Text style={{ fontSize: 22, color:'#04d9ff' }}>Go to GameList</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    marginBottom: 48,
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#04d9ff'
  },
  gameInput: {
    fontSize: 28,
    marginBottom: 32,
    borderWidth: 2,
    padding: 8,
    width: '80%',
    borderRadius: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 250,
    height: 250,
    borderColor: '#04d9ff',
    borderWidth: 2,
    borderRadius: 100,
  }
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    games: state.gameReducer.gameList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (game) => dispatch(addGame(game))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameForm);