// app.js
// This file controls what the app does.
// Students will fill in the logic for adding, updating, and deleting tasks.

// The array where all tasks will be stored
let tasks = [];

// ID counter for new tasks
let nextTaskId = 1;

document.addEventListener("DOMContentLoaded", async () => {
    // Get DOM elements
    const form = document.getElementById("add-task-form");
    const taskList = document.getElementById("task-list");
    const emptyState = document.getElementById("empty-state");

    // ========== INITIALIZATION ==========
    // Load tasks from localStorage
    tasks = loadTasks();
    
    // Update nextTaskId to avoid conflicts
    if (tasks.length > 0) {
        nextTaskId = Math.max(...tasks.map(task => task.id)) + 1;
    }
    
    // If no tasks, load sample data
    if (tasks.length === 0) {
        const sampleTasks = await loadSampleData();
        if (sampleTasks.length > 0) {
            tasks = sampleTasks;
            saveTasks(tasks);
            // Update nextTaskId for sample data
            nextTaskId = Math.max(...tasks.map(task => task.id)) + 1;
        }
    }
    
    // Render tasks to the page
    renderTasks(tasks, taskList, emptyState);
    
    // Remove the example task if it exists
    const exampleTask = document.querySelector('.example-task');
    if (exampleTask) {
        exampleTask.remove();
    }

    // ========== FORM SUBMISSION ==========
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form data
        const formData = getFormData();
        
        // Validate title
        if (!formData.title) {
            alert("Please enter a task title!");
            return;
        }
        
        // Create new task object
        const newTask = {
            id: nextTaskId++,
            title: formData.title,
            category: formData.category,
            dueDate: formData.dueDate,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        // Add to tasks array
        tasks.push(newTask);
        
        // Save to localStorage
        saveTasks(tasks);
        
        // Update the page
        renderTasks(tasks, taskList, emptyState);
        
        // Clear the form
        clearTaskForm(form);
    });

    // ========== TASK LIST EVENT DELEGATION ==========
    taskList.addEventListener("click", (event) => {
        const target = event.target;
        const listItem = target.closest(".task-item");
        
        if (!listItem) return;
        
        const taskId = Number(listItem.dataset.id);
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        
        if (taskIndex === -1) return;

        // Checkbox clicked - toggle completion
        if (target.classList.contains("task-checkbox")) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            saveTasks(tasks);
            renderTasks(tasks, taskList, emptyState);
            return;
        }

        // Delete button clicked
        if (target.classList.contains("task-delete-btn")) {
            const taskTitle = tasks[taskIndex].title;
            
            if (confirm(`Are you sure you want to delete "${taskTitle}"?`)) {
                tasks = tasks.filter(task => task.id !== taskId);
                saveTasks(tasks);
                renderTasks(tasks, taskList, emptyState);
            }
            return;
        }
        
        // Edit button clicked
        if (target.classList.contains("task-edit-btn")) {
            const task = tasks[taskIndex];
            
            // Populate form with task data
            document.getElementById("task-title").value = task.title;
            document.getElementById("task-category").value = task.category || '';
            document.getElementById("task-due-date").value = task.dueDate || '';
            
            // Remove task from array (will be re-added when form is submitted)
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks(tasks);
            renderTasks(tasks, taskList, emptyState);
            
            // Focus on title field for editing
            document.getElementById("task-title").focus();
            return;
        }
    });
    
    // ========== KEYBOARD SHORTCUTS (Optional) ==========
    document.addEventListener('keydown', (event) => {
        // Ctrl/Cmd + Enter to submit form
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            if (document.activeElement === document.getElementById("task-title") ||
                document.activeElement === document.getElementById("task-category") ||
                document.activeElement === document.getElementById("task-due-date")) {
                form.dispatchEvent(new Event('submit'));
            }
        }
        
        // Escape to clear form
        if (event.key === 'Escape') {
            clearTaskForm(form);
        }
    });
});