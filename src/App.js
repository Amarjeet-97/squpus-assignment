
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Create from './crudPages/Create';
import Update from './crudPages/Update';

function App() {
  const {loading}= useSelector(state=>state.alerts)
  return (
    <div className="App">
    {
      loading ? <Spinner/>:
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path='/create' element={
          <ProtectedRoute>
            <Create/>
          </ProtectedRoute>
        }/>

        <Route path='/update' element={
          <ProtectedRoute>
            <Update/>
          </ProtectedRoute>
        }/>
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />

        <Route path='/register' element={
          <PublicRoute>
            <Registration/>
          </PublicRoute>
        }/>

      </Routes>  }
      
    
       
    </div>
  );
}

export default App;
