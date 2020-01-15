import React from 'react';
import { ItemsListContainer, ItemsSelected } from '../../components';

const ItemsContainer = ({ className }) => (
  <div className={className}>
    <ItemsListContainer />
    <ItemsSelected />
  </div>
);

export default ItemsContainer;
