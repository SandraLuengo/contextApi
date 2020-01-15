import styled from 'styled-components';
import Home from './Home';
import * as style from '../../../static/styles/stylesVariables';


export default styled(Home).attrs({})`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  .header {
    width: 100%;
    font-weight: bold;
    height:6vh;
    border-bottom: solid ${style.borderColor} 1.3px;
    &__title {
      color: #525252;
      padding: 1%;
      margin: 0;
      font-size: 1.2rem;
    }
  }
`;
