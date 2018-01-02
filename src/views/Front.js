import React, { PropTypes } from 'react';
import { Provider, connect } from 'react-redux';

import Action from 'actions';
import { StyledText, Container } from 'components/Universal';

import { Button } from 'react-native';
import config from 'config.js';
import Counter from 'views/Counter';
import _ from 'lodash';
import Author from 'views/Author';

class Front extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Front`,
  });
  render() {
    return (
      <Container>
        <StyledText>Open up App.js to start working on your app!</StyledText>
        <StyledText>Change you make will automatically reload.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        <StyledText>Author : {config.author}</StyledText>
        <Button
          onPress={this.props.goToAuthor}
          title="Network(It loads data from github)"
        />
        <Button
          onPress={this.props.goToCounter}
          title="Counter(Simple logic calculation in redux)"
        />
        <Button onPress={this.props.goToPet} title="Go To Pet(Numbr of pets)" />
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //
  return {};
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return {
    goToAuthor() {
      console.log('going to author');
      return dispatch(Action.Nav.goTo('Author'));
    },
    goToCounter() {
      return dispatch(Action.Nav.goTo('Counter'));
    },
    goToPet() {
      console.log('going to pet');
      return dispatch(Action.Nav.goTo('Pet'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Front);
