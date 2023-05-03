import './App.css';
import {  BrowserRouter as Router ,Routes, Route,Navigate,Redirect } from 'react-router-dom'
import Landing from './pages/landing';
import SignIn from './pages/signIn';
import TodoList from './pages/todoList';
import ErrorPage from './pages/ErrorPage';

function App() {
const SaveLogin = localStorage.getItem("LogIn");
    

  return (
    <div className="App">
       <Router>
          <Routes>  
              <Route path='/TodoList' element={SaveLogin ?<TodoList/>: <Navigate to="/SignIn" />}/>
              <Route path='/SignIn' element={SaveLogin ? <Navigate to="/TodoList" /> : <SignIn/>}/> 
              <Route path="/" element={SaveLogin ? <Navigate to="/TodoList" />:<Landing/>}/> 
              <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
