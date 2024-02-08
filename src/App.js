import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetailsPatient from './components/AddDetailsPatient';
import ViewDetailsPatient from './components/ViewDetailsPatient';
import SearchPatients from './components/SearchPatients';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AddDetailsPatient/> } />
        <Route path='/view' element={ <ViewDetailsPatient/> } />
        <Route path='/search' element={ <SearchPatients/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
