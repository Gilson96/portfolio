import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './HomePage/homepage'
import About from '../components/About/about'
import Resume from '../components/Resume/resume'
import Projects from '../components/Projects/projects'
import Contact from '../components/Contact/contact'



const Main = () => (   
    <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/about" component={ About }/>
        <Route exact path="/resume" component={ Resume }/>
        <Route exact path="/projects" component={ Projects }/>
        <Route exact path="/contact" component={ Contact }/>
    </Switch>
)
export default Main;