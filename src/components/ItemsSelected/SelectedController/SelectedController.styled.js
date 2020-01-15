import styled from 'styled-components';
import SelectedController from './SelectedController';
import * as style from '../../../static/styles/stylesVariables';

export default styled(SelectedController).attrs({})`
  max-width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: none none solid none;
  border-color: #e9e9e9;
  border-width: 1.3px;
  padding: 0 3%;
  .itemsNumber {
    color: #979797;
  }
  .clear {
    color: ${style.primaryColor};
    font-weight: bold;
    &:hover {
      cursor: pointer;
      color: #4d8dd6;
      transition: color .3s ease-in-out;
    }
  }
`;
