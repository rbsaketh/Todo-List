export class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.isComplete = false;
        this.creationDate = new Date();
    }

    toggleComplete() {
        this.isComplete = !this.isComplete;
    }

    updateDetails(details) {
        Object.assign(this, details);
    }
}
