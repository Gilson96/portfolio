import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main.js';
import { Link } from 'react-router-dom';


class App extends Component {
  render(){
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<a className="header-anchor-one" href="/">Gi's Portofolio</a>} scroll>
                    <Navigation className="header-nav">
                        <Link className="header-nav-one" to="/resume">Resume</Link>
                        <Link className="header-nav-one" to="/projects">Projects</Link>
                        <Link className="header-nav-one" to="/contact">Contact</Link>
                    </Navigation>
                   
                </Header>
                <Drawer title={<a className="header-anchor-two" href="/">Gi's Portofolio</a>}>
                    <Navigation className="header-nav-two">
                        <Link style={{color: "black"}} to="/resume">Resume</Link>
                        <Link style={{color: "black"}} to="/projects">Projects</Link>
                        <Link style={{color: "black"}} to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
