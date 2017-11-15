import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import Counter from "views/Counter";
import _ from "lodash";
import Author from "views/Author";
import Front from "views/Front";

export const AppNavigator = StackNavigator({
  Counter: { screen: Counter },
  Author: { screen: Author },
  Front: { screen: Front }
});
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
