import React from 'react';
import ReactDOM from 'react-dom';

import {
  Links
} from './components';

const App = () => {

return <div className="app">
    <Links />
  </div>
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);