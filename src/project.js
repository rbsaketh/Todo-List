import { Todo } from './todo.js';

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
        this.creationDate = new Date();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }

    render() {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `<h2>${this.title}</h2><p>${this.description}</p>`;

        projectDiv.addEventListener('click', () => {
            this.showTodos();
        });

        return projectDiv;
    }

    showTodos() {
        const todosContainer = document.getElementById('todos');
        todosContainer.innerHTML = '';

        const todosTitle = document.createElement('h3');
        todosTitle.textContent = `Todos for ${this.title}`;
        todosContainer.appendChild(todosTitle);

        const addTodoForm = document.createElement('form');
        addTodoForm.innerHTML = `
            <input type="text" id="todoTitle" placeholder="Todo Title" required>
            <input type="text" id="todoDescription" placeholder="Todo Description" required>
            <input type="date" id="todoDueDate" required>
            <select id="todoPriority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Todo</button>
        `;
        addTodoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = addTodoForm.querySelector('#todoTitle').value;
            const description = addTodoForm.querySelector('#todoDescription').value;
            const dueDate = addTodoForm.querySelector('#todoDueDate').value;
            const priority = addTodoForm.querySelector('#todoPriority').value;
            const newTodo = new Todo(title, description, dueDate, priority);
            this.addTodo(newTodo);
            this.showTodos(); // Refresh the todos display
        });
        todosContainer.appendChild(addTodoForm);

        const todosDiv = document.createElement('div');
        todosDiv.className = 'todos';

        this.todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.className = `todo ${todo.priority.toLowerCase()}-priority`;
            todoDiv.innerHTML = `<p>${todo.title} (Due: ${todo.dueDate})</p>`;
            todosDiv.appendChild(todoDiv);
        });

        todosContainer.appendChild(todosDiv);
    }
}
