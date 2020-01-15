import styled from 'styled-components';
import ItemsList from './ItemsList';

export default styled(ItemsList).attrs({})`
  width: 100%;
  height: 81vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 11px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7a7a7a;
  }
`;
