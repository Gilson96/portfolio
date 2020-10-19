import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <section className="contact-body">
                <Grid className="contact-grid">

                    <Cell col={6}>
                        <h2>Gilson de Almeida</h2>
                        <img
                            alt="avatar"
                            className="avatar-image"
                            src="https://pickaface.net/gallery/avatar/20150803_213527_3101_RASTA.png"
                            style={{ height: 17+"rem",
                                paddingTop: 0+"em",
                                borderRadius: 1+"rem"
                            }}
                        />
                        <p className="contact-text">Feel free to reach out through any platforms available
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-list-item">
                                        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                                        <a href="https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/" >linkedin</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list-item">
                                        <i class="fab fa-github" aria-hidden="true"></i>
                                        <a href="https://github.com/Gilson96" >github</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list-item">
                                        <i class="fas fa-envelope" aria-hidden="true"></i>
                                        <a href="#" >grafael99@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>


                    </Cell>

                </Grid>
            </section>
        )
    }
}

export default Contact;