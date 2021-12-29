import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home'
import {List} from './pages/List'
import {Film} from './pages/Film'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/films" />
        <Route element={<Film />} path="/films/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
