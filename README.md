[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-_UqNarK)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21953362&assignment_repo_type=AssignmentRepo)
# Vault Scholars TODO App

This is a starter project for your **mid-course capstone**: building a TODO app
using only **HTML, CSS, and JavaScript**.

## What You'll Build

This TODO app allows users to add tasks, mark them as complete, delete them, and persist data using localStorage. The interface includes a form for new tasks and a list that updates dynamically.

## Getting Started

1. Clone this repository to your local machine: `git clone <repo-url>`
2. Navigate to the project folder: `cd todo-app`
3. Create a new branch for your work: `git checkout -b your-branch-name`
4. Open the project in VS Code (or your preferred code editor).
5. Open `index.html` directly in your browser to see the app.
6. Start editing the files inside the `assets/` folder and refresh your browser
   to see changes.

Alternatively, you can open this project in GitHub Codespaces for a cloud-based development environment.

## Prerequisites

- Basic understanding of HTML, CSS, and JavaScript.
- A code editor (e.g., VS Code).
- Git for version control.

Resources: [MDN Web Docs](https://developer.mozilla.org/)

## Folder structure

```text
todo-app/
├── index.html          # Main HTML page
├── assets/
│   ├── css/
│   │   ├── base.css        # Colors, fonts, resets, global styles
│   │   ├── layout.css      # Page layout (header, main, footer, cards)
│   │   └── components.css  # Buttons, task list, small UI pieces
│   ├── js/
│   │   ├── app.js          # Main app "brain" (event listeners + logic)
│   │   ├── dom.js          # DOM helper functions (rendering tasks)
│   │   └── storage.js      # Functions for localStorage
└── README.md
```

## Your job

### In `app.js`
- Fill in the TODOs to:
  - Read values from the form.
  - Add new task objects to the `tasks` array.
  - Mark tasks as completed.
  - Delete tasks.

### In `dom.js`
- Fill in the TODOs to implement DOM helper functions for rendering tasks.
- Note: There is a placeholder task element in the HTML for reference. Remove it once you implement the rendering logic.

### In `storage.js`
- Fill in the TODOs to implement localStorage functions for persisting tasks.

### General
- Use the helper functions from `dom.js` and `storage.js` as needed.
- Feel free to update the CSS styles to personalize your project.

As you work, try to keep your code organized and readable. Pretend you are
handing this project to another developer who has never seen it before.

## Submission

To submit your project:

1. Create a new branch from `main`.
2. Implement your code on that branch.
3. Submit a pull request to `main`.

We'll review the pull request and approve it if it matches the expected output for the project. We'll provide feedback on your PR. If issues arise, check the expected output in the project guidelines.
