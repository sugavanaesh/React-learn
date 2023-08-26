import './App.css';
import Home from './components/Home';
import Todo from './components/Todo';
import Axios from './components/Axios';
import Login from './components/Login';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function Nav(){
  return(
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/todo'>Todo</Link></li>
      <li><Link to='/axios'>Axios</Link></li>
    </ul> 
  )
}


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
          <Route path='/axios' element={<Axios/>}></Route>
        </Routes>
       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
