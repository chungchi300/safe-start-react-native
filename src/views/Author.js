import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { StyledText, Container, Content } from 'components/Universal';
import Action from 'actions';
class Author extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Author`,
  });
  componentDidMount() {
    this.props.load();
  }
  render() {
    let author;
    if (this.props.author) {
      author = <StyledText>{this.props.author.company}</StyledText>;
    }
    let network = <StyledText>{this.props.network}</StyledText>;
    return (
      <Container>
        <Content>
          <StyledText>Jeff Chung - </StyledText>
          {author}
          {network}
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return { author: state.domain.author, network: state.network.author };
}
function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(Action.Author.load()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Author);
