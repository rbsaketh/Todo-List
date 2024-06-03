import { ProjectManager } from './projectManager.js';
import { Project } from './project.js';
import './styles.css';

const projectManager = new ProjectManager();

document.addEventListener('DOMContentLoaded', () => {
    const projectsDiv = document.getElementById('projects');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const todosContainer = document.createElement('div');
    todosContainer.id = 'todos';
    todosContainer.className = 'todos-container';
    document.getElementById('mainContent').appendChild(todosContainer);

    addProjectBtn.addEventListener('click', () => {
        const projectTitle = prompt('Enter project title:');
        const projectDescription = prompt('Enter project description:');
        if (projectTitle && projectDescription) {
            const newProject = new Project(projectTitle, projectDescription);
            projectManager.addProject(newProject);
            renderProjects();
        }
    });

    function renderProjects() {
        projectsDiv.innerHTML = '';
        projectsDiv.appendChild(projectManager.render());
    }

    renderProjects();
});
