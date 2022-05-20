
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import ParticlesContainer from './components/ParticlesContainer/ParticlesContainer';
import Welcome from './components/Welcome/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Register from './components/Register/Register';



function App() {
  return (
    <div className="App" >
    
   <ParticlesContainer></ParticlesContainer>
        
       <AuthProvider>
       <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
         
    </AuthProvider>
      
 
    </div>
  );
}

export default App;
