import React from "react";



const Skills = ({ title }) => {

    const name = ["fa-brands fa-html5", "fa-brands fa-css3", "fa-brands fa-js", "fa-brands fa-bootstrap", "fa-brands fa-react"]

    return (
        <main className="skills" id="skills">
            <header>
                <h1>{title}</h1>
            </header>
           
            <ul>
                {
                    name.map(name => (

                        <li><p><i class={name}></i></p></li>

                    ))
                }
            </ul>


        </main>
    )
}

export default Skills;