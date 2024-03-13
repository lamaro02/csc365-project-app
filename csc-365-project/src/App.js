import './App.css';
import Product from './Product';
import AddGuild from './AddGuild'
import Guild from './Guild'
import Root from './Root'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/guilds' element={<Guild/>}/>
          <Route path='/addGuild' element={<AddGuild/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
