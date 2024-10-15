
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { StoryCard } from './pages/storyCards/StoryCard'
import { NewStory } from './pages/newStory/newStory';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { GlobalContextWrapper } from './context/GlobalContext';

function App() {


  return (
    
      <GlobalContextWrapper>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/stories' element={<StoryCard />}></Route>
              <Route path='/post' element={<NewStory />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </GlobalContextWrapper>
  
  )
}

export default App
