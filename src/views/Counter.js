import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StyledText, Container, Content } from 'components/Universal';
import { Button, View } from 'react-native';
import Action from 'actions';
import { isEven } from 'helpers/Format.js';

class Counter extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Counter`,
  });
  render() {
    let numDescription;

    if (isEven(this.props.count)) {
      numDescription = <StyledText>Is Even</StyledText>;
    } else {
      numDescription = <StyledText>Is odd</StyledText>;
    }
    return (
      <Container>
        <Content>
          <StyledText>Number of count = {this.props.count}</StyledText>
          {numDescription}
          <Button
            onPress={this.props.increaseCount}
            title="Click to increase count"
          />
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return { count: state.count };
}
function mapDispatchToProps(dispatch) {
  return { increaseCount: () => dispatch(Action.Count.increase()) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
