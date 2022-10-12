import react from 'react'
import { Link } from 'react-router-dom'; 

const navigator = () => (

    <nav>
        <ul>
            <li>
                <a href="/" id='link'>Home</a>
            </li>
            <li>
                <a href="#skills" id='link'>Skills</a>
            </li>
            <li>
                <a href="#projects" id='link'>Projects</a>
            </li>
            <li>
                <a href="#footer" id='link'>Contact</a>
            </li>
        </ul>
    </nav>

) 

export default navigator;