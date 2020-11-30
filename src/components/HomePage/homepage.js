import React, { Component } from 'react';
import Navigation from './Navigation/navigation';
import Content from './Content/content';
import { ConsoleWriter } from 'istanbul-lib-report';

class HomePage extends Component {
    
    

    render() {
        
        return (
            <section className="main">
            
                <Navigation/>
               
                <Content/>
               
            </section>
               
        )
    }
}

export default HomePage;