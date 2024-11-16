import './App.css';
import Header from './layout/Header';
import User from './layout/User';
import LoanHistory from './layout/LoanHistory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './layout/auth/Login';
import SignUp from './layout/auth/SignUp';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <User />
              <LoanHistory />
            </Fragment>
          }
        />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
