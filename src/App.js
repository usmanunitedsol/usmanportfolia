import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Home_Footer from './components/Home_Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Blogs from './components/Blogs';



function App() {
  return (
   <>
    
     <Navbar/>
     
     <Routes>
        <Route path="/" element={  <Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="resume" element={  <Resume/>} />
          <Route path="projects" element={ <Projects/>} />
          <Route path="blog" element={ <Blogs/>} />
      </Routes>
      
     <Home_Footer/>  
   </>
  );
}

export default App;
