import Burger from './components/Burger';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />

<Routes>
  <Route path='/' element={<Home name='Maddy'/>} />
  <Route path='/burger' element={<Burger/>} />
</Routes>

      <Home name='Madhavi'/>
      <Burger />
    </div>
  );
}

export default App;
