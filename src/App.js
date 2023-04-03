import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Customerhome from './Components/Customer/Customerhome';
import Login from './Components/Genric/Login';
import Signup from './Components/Genric/Signup';


function App() {
  return (
  <div className="App">
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Signup/>}>   </Route>

    <Route path='/login' element={<Login/>} /> 

   </Routes>
   
   
   </BrowserRouter>


   </div>

  );
}

export default App;
