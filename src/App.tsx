import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './login/login';



function App() {
  return ( 
     <Routes>
       <Route path="*" element={<Layout/>} ></Route>
       <Route path="/login" element= {<Login/>}></Route>
     </Routes>
 );
}

export default App;
