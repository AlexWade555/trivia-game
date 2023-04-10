import NotFound from '../404';
import HomePage from '../HomePage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
