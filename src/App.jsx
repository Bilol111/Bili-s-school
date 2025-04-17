import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Grades from './pages/Grades';
import Aboutus from './pages/Aboutus';
import Examen from './pages/Examen';
import Aboutstudent from './pages/AboutStudent';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PrivateRoute from './pages/components/route/PrivateRoute';
import Third from "./pages/teachers/Third"
function App() {
  return (

      <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/grades" element={<Grades />} />
        <Route path='/about' element={<Aboutus/>}/>
        <Route path="/students" element={<Students />} />
        <Route path='/examen' element={<Examen/>}/>
        <Route path='/abouts' element={<Aboutstudent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/third' element={<Third/>}/>
      </Routes>
  );
}

export default App;
