import NotFound from '../404';
import HomePage from '../HomePage';
import Questions from '../Questions';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/questions" element={<Questions/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
