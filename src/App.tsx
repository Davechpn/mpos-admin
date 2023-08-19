import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './landing/layout/layout';
import Login from './landing/login/login';
import { useContext } from 'react';
import AuthContext from './contexts/auth.provider';
import Setup from './landing/setup/setup';
import Suspended from './landing/suspended/suspended';
import Unauthorized from './landing/unauthorized/unauthourized';



function App() {

  const { auth } = useContext(AuthContext)

  return (
    <>
      {auth &&
        <Routes>
          <Route path="*" element={<Layout />} ></Route>
          <Route path="/setup/:code" element={<Setup />} />
          <Route path="/suspended" element={<Suspended />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      }

      

      {!auth && <Login />}
    </>

  );
}

export default App;
