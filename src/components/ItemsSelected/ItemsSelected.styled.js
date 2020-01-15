import styled from 'styled-components';
import ItemsSelected from './ItemsSelected';
import * as style from '../../static/styles/stylesVariables';

export default styled(ItemsSelected).attrs({})`
  height: 100%;
  width: 45%;
  border-left: solid ${style.borderColor} 1.3px;

  .itemsSelected {
    height: 100%;
    max-height: 86vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 11px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7a7a7a;
    }
  }
`;
