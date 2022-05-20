
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



function App() {
  return (
    <div className="App" >
    
   <ParticlesContainer></ParticlesContainer>
        
       <AuthProvider>
       <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="login" element={<Login />} />
      </Routes>
         
    </AuthProvider>
      
 
    </div>
  );
}

export default App;
