import styled from 'styled-components';
import { RxEnvelopeClosed, RxFontBold, RxIdCard } from 'react-icons/rx';
import { COLOR } from '../../constants/index';
const { subFontColor } = COLOR;

export const EditForm = styled.form`
  label {
    display: flex;
    align-items: flex-end;
    margin: 5px 0;
  }
  label:first-child {
    font-size: 0.8rem;
    /* display: block; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  textarea {
    width: 100%;
    height: 70px;
    padding: 5px;
    box-sizing: border-box;
    resize: none;
    border-radius: 10px;
  }
  input {
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 5px;
  }
  button {
    position: relative;
    left: 85%;
    font-size: 0.8rem;
    color: ${subFontColor};
  }
`;
export const EmailIcon = styled(RxEnvelopeClosed)``;
export const BlogIcon = styled(RxFontBold)``;
export const CompanyIcon = styled(RxIdCard)``;