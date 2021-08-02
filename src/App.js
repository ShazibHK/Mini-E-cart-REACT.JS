import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Purchase from './components/purchase';

import DisplayProducts from './components/DisplayProducts/DisplayProducts.js';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/"  component={DisplayProducts} />
      <Route exact path="/purchase"  component={Purchase} />
    </BrowserRouter>
    </div>
    
  );
}

export default App;
