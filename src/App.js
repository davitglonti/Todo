import './App.css';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Landing from './pages/landing';
import SignIn from './pages/signIn';
import TodoList from './pages/todoList';
function App() {
  return (
    <div className="App">
       <Router>
        
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/todoList' element={<TodoList/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
