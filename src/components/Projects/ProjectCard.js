import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


const ProjectCard = ({ number, description }) => (

   
        <Card shadow={5} className="projects-card">
            <CardTitle className="projects-card-title">
                <p>React Project {number}</p>
            </CardTitle>

            <CardText className="projects-card-text">
                <p>{description}</p>
            </CardText>

            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>

            <CardMenu className="projects-card-menu">
                <IconButton name="share"></IconButton>
            </CardMenu>

        </Card>
    

);


export default ProjectCard;