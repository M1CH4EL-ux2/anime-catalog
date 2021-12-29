import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home'
import {List} from './pages/List'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/animes" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
