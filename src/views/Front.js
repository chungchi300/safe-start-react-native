import React, { PropTypes } from "react";
import { Provider, connect } from "react-redux";
import { isEven } from "helpers/Format.js";
import Action from "actions";
import { StyledText, StyledView } from "components/Universal";
import { Icon } from "native-base";
import { Button } from "react-native";
import config from "config.js";
import Counter from "views/Counter";
import _ from "lodash";

class Front extends React.Component {
  render() {
    let numDescription;

    if (isEven(this.props.count)) {
      numDescription = <StyledText>Is Even</StyledText>;
    } else {
      numDescription = <StyledText>Is odd</StyledText>;
    }
    return (
      <StyledView>
        <StyledText>Open up App.js to start working on your app!</StyledText>
        <StyledText>Change you make will automatically reload.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        <StyledText>Author : {config.author}</StyledText>
        <Counter />
      </StyledView>
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Front);
