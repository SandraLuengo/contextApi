import styled from 'styled-components';
import CheckAll from './CheckAll';
import * as style from '../../static/styles/stylesVariables';

export default styled(CheckAll).attrs({})`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding: 1%;
  border-style: none none solid none;
  border-color: ${style.borderColor};
  border-width: 1.3px;
  .checkBox {
    margin-right: 4%;
  }
  .numberItems {
      font-size:1rem;
      font-weight:bold;
  }
`;
