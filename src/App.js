import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Pages/Homepage';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App 2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <div className='lg:px-24 px-4'>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/review' element></Route>
          <Route path='/dashboard' element></Route>
          <Route path='/blogs' element></Route>
          <Route path='/about' element></Route>
          <Route path='*' element></Route>
        </Routes>
      </div>
    </div>
      
  );
}

export default App;
