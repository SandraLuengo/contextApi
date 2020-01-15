import React from 'react';
import { Provider } from './state/useGlobalState';
import { Home } from './components';
import { initialState, reducer } from './state/reducer';


const App = () => (
  <Provider reducer={reducer} initialState={initialState}>
    <Home />
  </Provider>
);

export default App;
