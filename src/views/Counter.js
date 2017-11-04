import React, { PropTypes } from "react";
import { StyledText, StyledView } from "components/Universal";
class Counter extends React {
  render() {
    return (
      <StyledView>
        <StyledText>Number of count = {this.props.count}</StyledText>
        {numDescription}
        <Button
          onPress={this.props.increaseCount}
          title="Click to increase count"
        />
      </StyledView>
    );
  }
}
function mapStateToProps(state, ownProps) {
  //
  return { count: state.count };
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return { increaseCount: () => dispatch(Action.Count.increase()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Front);
