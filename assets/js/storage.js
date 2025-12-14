// storage.js
// Students will implement saving and loading tasks using localStorage.

const STORAGE_KEY = "vault_scholars_todo_tasks";

// This function should:
// - Read the stored JSON string from localStorage
// - Convert it back into an array
// - Return an empty array if nothing is stored yet
function loadTasks() {
    const tasksJSON = localStorage.getItem(STORAGE_KEY);
    if (tasksJSON) {
        try {
            return JSON.parse(tasksJSON);
        } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
            return [];
        }
    }
    return [];
}

// This function should:
// - Convert the array of tasks into a JSON string
// - Save it to localStorage using STORAGE_KEY
function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, tasksJSON);
}

// Function to load sample data from seed.json
async function loadSampleData() {
    try {
        const response = await fetch('assets/data/seed.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const sampleTasks = await response.json();
        return sampleTasks;
    } catch (error) {
        console.error('Error loading sample data:', error);
        return [];
    }
}

// Function to clear all tasks
function clearAllTasks() {
    localStorage.removeItem(STORAGE_KEY);
}