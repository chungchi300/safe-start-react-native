import React, { PropTypes } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { StyledText, Container } from "components/Universal";
class Author extends React.Component {
  render() {
    return <StyledText>Jeff Chung</StyledText>;
  }
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Author);
