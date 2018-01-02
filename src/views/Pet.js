import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components/native';

import { StyledText, Container, Content } from 'components/Universal';
import Action from 'actions';
import Pet from 'components/Pet';
class Author extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Pet`,
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
    let content;
    if (this.props.network == 'SUCCESS') {
      let pets = this.props.pets.map(pet => <Pet key={pet.id} pet={pet} />);
      content = (
        <Content>
          {pets}

          <StyledText>Numbr of pets{this.props.pets.length}</StyledText>
        </Content>
      );
    }

    return (
      <Container>
        <Content>
          <StyledText>Domain & Swagger - </StyledText>
          {network}
          {content}
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    pets: _.values(state.domain.petsById),
    network: state.network['/pet/findByStatus'],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(Action.Pet.load()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Author);
