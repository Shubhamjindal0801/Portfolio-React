import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/project' element={<Projects />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
