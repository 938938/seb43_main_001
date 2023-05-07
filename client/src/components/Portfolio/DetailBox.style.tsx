import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .ql-container {
    background-color: ${(props) => props.theme.themeStyle.inputColor};
  }
`;
export const Title = styled.span`
  height: 45px;
`;
