// App.tsx manages the routing of the application using react-router-dom. It defines three routes: Home, Study, and Completion, each corresponding to a different page component.

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Study from './pages/Study';
import Completion from './pages/Completion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
