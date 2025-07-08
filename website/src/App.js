import {BrowserRouter as Router,Routes,Route, Form} from 'react-router-dom'
import Home from './pages';
import Form1 from './Form';
import AppLogin from './mixed';
import Index from './Components/admindash/admindash';
import Reports from './pages/report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Form" element ={<Form1/>} />
        <Route path='/login' element={<AppLogin/>} />
        <Route path='/admindash' element={<Index/>} />
        <Route path="/report" element ={<Reports/>} />
      </Routes>
    </Router>
  );
}

export default App;
