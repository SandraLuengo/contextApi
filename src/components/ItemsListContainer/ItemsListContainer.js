import React from 'react';
import { Search, CheckAll, ItemsList } from '../../components';

const ItemsListContainer = ({ className }) => (
  <div className={className}>
    <Search />
    <CheckAll />
    <ItemsList />
  </div>
);

export default ItemsListContainer;
