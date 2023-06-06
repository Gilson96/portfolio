import React from "react";



const Contact = ({ title }) => {

    const links = [
        { 
            key: 1, 
            value1: "https://github.com/Gilson96", 
            value2: "fab fa-github" 
        },
        { 
            key: 2, 
            value1: "https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/", 
            value2: "fab fa-linkedin-in" 
        },
        { 
            key: 3, 
            value1: "mailto:grafael99@gmail.com", 
            value2: "fa-solid fa-envelope" 
        }]

    return (
        <ul className="links-box">
            {links.map((link) => (
                <li className="links" key={link.key}>
                    <a href={link.value1}>
                        <i className={link.value2}>
                        </i>
                    </a>
                </li>
            ))}
        </ul>
    )

}

export default Contact;