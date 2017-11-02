import styled from 'styled-components/native';
const StyledView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBackground};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`color: white;`;
export { StyledView, StyledText };
