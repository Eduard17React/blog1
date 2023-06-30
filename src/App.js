import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MyPosts from './components/MyPosts/MyPosts';
import NewPosts from './components/NewPosts/NewPosts';
import HomeWrapper from './components/page/HomeWrapper';
import Login from './components/Login/Login';
import Registre from './components/Registre/Registre';
import Error from './components/page/Error/Error';
import UniqePage from './components/UniqePage/UniqePage';
import EditUniqePage from './components/EditUniqePage/EditUniqePage';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomeWrapper {...{ setCurrentUser, currentUser }} />}>
          <Route index element={<Home {...{ currentUser }} />} />
          <Route path='myposts' element={<MyPosts {...{ currentUser }} />} />
          <Route path='newposts' element={<NewPosts {...{ currentUser }} />} />

          <Route path='uniqe'>
            <Route path='uniqepage/:id' element={<UniqePage {...{ currentUser }} />} />
            <Route path='edituniqepage/:id' element={<EditUniqePage />} />
        </Route>
        
        </Route>

        

        <Route path='auth'>
          <Route path='login' element={<Login {...{currentUser, setCurrentUser}} />} />
          <Route path='registre' element={<Registre />} />
        </Route>

        <Route path='*' element={<Error />} />
        
      </Routes>
    </div>
  );
}

export default App;
