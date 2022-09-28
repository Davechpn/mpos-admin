import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './login/login';
import { useContext } from 'react';
import AuthContext from './context/auth.provider';



function App() {

  const { auth } = useContext(AuthContext)

  return (
    <>
      {auth &&
        <Routes>
          <Route path="*" element={<Layout />} ></Route>
        </Routes>
      }

      {!auth && <Login />}
    </>

  );
}

export default App;
