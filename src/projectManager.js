import { Project } from './project.js';

export class ProjectManager {
    constructor() {
        this.projects = [new Project('Default Project', 'Default project for all todos')];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProject(projectTitle) {
        return this.projects.find(project => project.title === projectTitle);
    }

    removeProject(projectTitle) {
        this.projects = this.projects.filter(project => project.title !== projectTitle);
    }

    render() {
        const projectsDiv = document.createElement('div');
        projectsDiv.className = 'project-list';

        this.projects.forEach(project => {
            const projectDiv = project.render();
            projectsDiv.appendChild(projectDiv);
        });

        return projectsDiv;
    }
}
