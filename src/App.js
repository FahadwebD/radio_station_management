import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
    <AuthProvider>
 <Login></Login>
    </AuthProvider>
    </div>
  );
}

export default App;
