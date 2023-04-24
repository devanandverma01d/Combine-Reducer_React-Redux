import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Page2 } from './Page2';
import { Page1 } from './Page1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
