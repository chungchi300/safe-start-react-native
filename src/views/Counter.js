import React, { PropTypes } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { StyledText, StyledView } from "components/Universal";
import { Button, View } from "react-native";
import Action from "actions";
class Counter extends React.Component {
  render() {
    return (
      <View>
        <StyledText>Number of count = {this.props.count}</StyledText>

        <Button
          onPress={this.props.increaseCount}
          title="Click to increase count"
        />
      </View>
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
