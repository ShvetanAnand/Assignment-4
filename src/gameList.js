import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteGame } from './actions/game';

class GameList extends Component {

  static navigationOptions = {
    title: 'Game List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  render() {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.games}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={36}
                onPress={() => this.props.delete(data.item.key)} />
              }
            />
        }
      />
    );
  }
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#000000',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    games: state.gameReducer.gameList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteGame(key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameList); 