import styled from 'styled-components';
import CityItem from './CityItem';

export default styled(CityItem).attrs({})`
  padding: ${({ selectorSide }) => (selectorSide ? '1% 2%;' : '1%')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
  }

  .cityImg {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 4%;
  }
  .cityInfo {
    min-width: fit-content;
    &__name {
      font-weight: 500;
    }
  }
  .checkCity {
    display: ${({ selectorSide }) => selectorSide && 'none'};
    margin-right: 4%;
  }
  .deleteItem {
    display: ${({ selectorSide }) => (selectorSide ? 'flex' : 'none')};
    width: 100%;
    justify-content: flex-end;
    font-size: 2rem;
    padding-right: 2%;
    color: #696969;
    &:hover {
      cursor: pointer;
      color: #4f4f4f;
      transition: color 0.3s ease-in-out;
    }
  }
`;
