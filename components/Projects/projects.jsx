import React from 'react';
import './projects.css';
import project1 from '../../assets/project1.jpg';
import project2 from'../../assets/project2.jpg'; 

const Projects = () => {
    return (
        <section class="project-section" id='Projects'>
      
        <div class="project-card">
            <img src={project1} alt="Project 1" class="project-image"/>
            <div class="project-details">
                <div class="project-title"><h2>Airplane Reservation System</h2></div>
                <a href="https://github.com/helloworld-at/Oop--Project">View Project</a>
            </div>
        </div>

        
        <div class="project-card">
            <img src={project2} alt="Project 2" className="project-image"/>
            <div class="project-details">
                <div class="project-title"><h2>Shoes Website</h2></div>
                <a href="https://github.com/helloworld-at/Final-Project/tree/main/Project%20of%20HTML">View Project</a>
            </div>
        </div>

    </section>
    );
}

export default Projects;