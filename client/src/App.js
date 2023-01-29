import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import HomePage from 'scenes/HomePage';
import LogInPage from 'scenes/LoginPage';
import ProfilePage from 'scenes/ProfilePage';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/profile/:userId' element={<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
