import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetCode from './GetCode';
import Info from './Info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetCode />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
