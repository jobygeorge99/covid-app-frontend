import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetailsPatient from './components/AddDetailsPatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AddDetailsPatient/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
