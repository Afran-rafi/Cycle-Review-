import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element></Route>
        <Route path='/review' element></Route>
        <Route path='/dashboard' element></Route>
        <Route path='/blogs' element></Route>
        <Route path='/about' element></Route>
        <Route path='*' element></Route>
      </Routes>
    </div>
  );
}

export default App;
