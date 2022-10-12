import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigator from './components/navigator';
import Header_section from './components/header_section';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Background from './components/backgrouns';

const App = () => (

   <>
      <div>
         <Navigator />

         <Header_section />

         <Skills title={'Skills'} />

         <Projects title={'Projects'} />

         <Footer />
      </div>
   </>
);

export default App;