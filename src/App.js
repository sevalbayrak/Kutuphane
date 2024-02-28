

import { Route,Routes } from 'react-router-dom';
import Home from './home';
import Goster from'./Goster';

import  { Toaster } from 'react-hot-toast';
import Giris from './Giris';
import KayitOl from './kayit';
import Gir from './gir';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <div>
        <Toaster/>
      </div>
      <Routes>
        <Route path='/' element={<Giris/>}/>
        <Route path='/kayit' element={<KayitOl/>}/>
        <Route path='/kitapekle' element={<Home/>}/>
        <Route path='/gir' element={<Gir/>}/>
        <Route path=':uid' element={<Profile/>}/>
        <Route path='/kutuphane' element={<Goster/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
