import React from 'react';
import { ItemsContainer } from '../../../components';


const Home = ({ className }) => (
  <div className={className}>
    <header className="header"><h1 className="header__title">Cities of China</h1></header>
    <ItemsContainer />
  </div>
);

export default Home;
