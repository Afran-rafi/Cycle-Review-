import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App 2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <Routes className='lg:px-24 px-4'>
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
