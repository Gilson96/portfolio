import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    // function to see which tab is active
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <>
                    <div className="project-grid">
                        <ProjectCard 
                            number={1}
                            description="description of react project 1"
                        />
                    </div>
                </>
            )
        } else if( this.state.activeTab === 1){
            return(
                <div className="project-grid">
                    <ProjectCard 
                        number={1}
                        description="description of laravel project 1"
                    />
                </div>
            )
        }
    }
  

    render(){
        return(
            <section className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{color: "white"}}>React/Redux</Tab>
                    <Tab style={{color: "white"}}>Php/Laravel</Tab>

                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                         <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </section>
        )
    }
}

export default Projects;