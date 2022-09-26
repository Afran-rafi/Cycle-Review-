import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Pages/Homepage';
import Reviews from './Components/Pages/Reviews'
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App 2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/review' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element></Route>
          <Route path='/blogs' element></Route>
          <Route path='/about' element></Route>
          <Route path='*' element></Route>
        </Routes>
    </div>
      
  );
}

export default App;
