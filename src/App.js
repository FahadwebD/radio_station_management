
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import ParticlesContainer from './components/ParticlesContainer/ParticlesContainer';
import Welcome from './components/Welcome/Welcome';
import {
  Route,
  Routes
} from "react-router-dom";
import Register from './components/Register/Register';
import Management from './components/Management/Management/Management';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App" >
    
  
        
       <AuthProvider>
       <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/welcome" element={<Welcome/>} />

        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <Management/>
            </PrivateRoute>
          }
        />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
         
    </AuthProvider>
      
 
    </div>
  );
}

export default App;
