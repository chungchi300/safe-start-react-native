import styled from 'styled-components/native';
import React, { PropTypes } from 'react';

import { StyledText, Container, Content } from 'components/Universal';
class Pet extends React.Component {
  render() {
    return (
      <StyledText className={this.props.className}>
        {this.props.pet.id} - {this.props.pet.name}
      </StyledText>
    );
  }
}
export default styled(Pet)``;
