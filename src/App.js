import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CounterComponent from './components/CounterComponent'; 
import Calculator from './components/Calculator';
import Profilo from './components/Profilo';
import Api from './components/Api';
function App() {
  return (
    <Router>
    <h2>HOME</h2>
    <ul className='nav'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Calculator'>calculator</Link></li>
      <li><Link to='/CounterComponent'>Counter</Link></li>
      <li><Link to='/Api'>Api</Link></li>
    </ul>
    <Routes>
      <Route exact path= '/' element={<Profilo/>}> </Route>
      <Route exact path= '/Calculator' element={<Calculator/>}></Route>
      <Route exact path= '/CounterComponent' element={<CounterComponent/>}></Route>
      <Route exact path= '/Api' element={<Api/>}></Route>
    </Routes>

  </Router>
  );
}

export default App;
