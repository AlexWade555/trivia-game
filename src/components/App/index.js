import NotFound from '../404';
import CategorySelection from '../CategorySelection';
import LandingPage from '../LandingPage';
import Questions from '../Questions';
import Scoreboard from '../Scoreboard';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/CategorySelection" element={<CategorySelection/>}/>
        <Route path="/questions" element={<Questions/> }/>
        <Route path="/scoreboard/:score" element={<Scoreboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
