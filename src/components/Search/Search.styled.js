import styled from 'styled-components';
import Search from './Search';
import * as style from '../../static/styles/stylesVariables';

export default styled(Search).attrs({})`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none none solid none;
  border-color: #e9e9e9;
  border-width: 1.3px;
  .search {
    width: 96%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1.2px ${style.lightGrey};
    &__icon {
      color: ${style.lightGrey};
    }
    &__input {
      width: 95%;
      border: none;
      outline: none;
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
        color: ${style.lightGrey};
      }
    }
  }
`;
