// dom.js
// In this file, students will write the functions that update the DOM.

// This function should:
// - Clear the current task list
// - Loop through the tasks array
// - Create an <li> for each task using createTaskElement()
// - Add each <li> to the <ul>
// - Show the empty state message when there are no tasks
function renderTasks(tasks, listElement, emptyStateElement) {
    // Clear the current list
    listElement.innerHTML = '';
    
    // Show empty state if no tasks
    if (tasks.length === 0) {
        emptyStateElement.style.display = 'block';
        return;
    } else {
        emptyStateElement.style.display = 'none';
    }
    
    // Create and append each task element
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        listElement.appendChild(taskElement);
    });
}

// This function should:
// - Create and return ONE <li> element following the structure above
// - Contain the checkbox, title, optional meta info, and delete button
// - Add the correct classes to each element
// - Make the checkbox checked if the task is completed
// - NOT add event listeners (app.js will handle that)
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;
    
    // Format date if exists
    let dueDateDisplay = '';
    if (task.dueDate) {
        const date = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isOverdue = date < today && !task.completed;
        
        dueDateDisplay = `
            <span class="task-due ${isOverdue ? 'overdue' : ''}">
                ${isOverdue ? '⚠️ ' : ''}${date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                })}
            </span>
        `;
    }
    
    // Build meta info (category + due date)
    let metaHTML = '';
    if (task.category || task.dueDate) {
        metaHTML = `<p class="task-meta">`;
        if (task.category) {
            metaHTML += `<span class="task-category">${task.category}</span>`;
            if (task.dueDate) metaHTML += ' • ';
        }
        if (task.dueDate) {
            metaHTML += dueDateDisplay;
        }
        metaHTML += `</p>`;
    }
    
    li.innerHTML = `
        <div class="task-item-left">
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <div class="task-main">
                <p class="task-title">${task.title}</p>
                ${metaHTML}
            </div>
        </div>
        <div class="task-actions">
            <button type="button" class="task-edit-btn">Edit</button>
            <button type="button" class="task-delete-btn">Delete</button>
        </div>
    `;
    
    return li;
}

// This function should:
// - Reset the form
// - Put focus back on the task title input
function clearTaskForm(form) {
    form.reset();
    document.getElementById("task-title").focus();
}

// Helper function to get form data
function getFormData() {
    return {
        title: document.getElementById("task-title").value.trim(),
        category: document.getElementById("task-category").value.trim(),
        dueDate: document.getElementById("task-due-date").value
    };
}