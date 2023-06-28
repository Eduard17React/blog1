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

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Home />} />
          <Route path='myposts' element={<MyPosts />} />
          <Route path='newposts' element={<NewPosts />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='uniq'>
          <Route path='show/:id' element={<UniqePage />} />
          <Route path='edit/:id' element={<EditUniqePage />} />
        </Route>

        <Route path='auth'>
          <Route path='login' element={<Login />} />
          <Route path='registre' element={<Registre />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
