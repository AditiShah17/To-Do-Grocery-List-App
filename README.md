# To-Do-Grocery-List-App
This project is an interactive to-do list where tasks can be managed in real time. It demonstrates how to add, edit, and remove elements dynamically on a web page using JavaScript. By leveraging various DOM manipulation methods, this application showcases how to create dynamic and interactive web pages for a seamless user experience.

## Features

* **Add a Task**: Users can type a new task into the input field and add it to the list.
* **Edit a Task**: Each task has an "Edit" button that opens a prompt, allowing the user to update the task's text.
* **Remove a Task**: Each task has a "Delete" button to instantly remove it from the list.

***

## Technology Stack

* **HTML**: Provides the basic structure for the content, including the list container, input field, and buttons.
* **CSS**: Styles the application for a clean, centered, and user-friendly layout.
* **JavaScript**: Powers all the interactive logic for creating, updating, and deleting tasks.

***

## Getting Started

To run this application on your local machine, follow these steps.

### Prerequisites

You will need a code editor (like VS Code) and the **Live Server** extension installed.

### Installation & Launch

1.  Clone or download the repository to your local machine.
2.  Open the project folder in your code editor.
3.  Right-click on the `index.html` file.
4.  Select **"Open with" → "Google Chrome"** from the context menu.
5.  The application will automatically open in a new browser tab.

***

## Code Overview

The project is structured into three main parts, as detailed in the lab exercises.

### 1. HTML Structure (`index.html`)

* An unordered list `<ul id="todoList">` serves as the container for all the dynamic task items.
* An `<input id="taskInput" type="text">` allows users to enter new task descriptions.
* A `<button>` is used to trigger the function for adding a new task.

### 2. CSS Styling (`style.css`)

* The `.todo-container` class centers the main application box and provides basic styling like padding and borders.
* Flexbox is used on the list items (`<li>`) to neatly align the task text with the "Edit" and "Delete" buttons.

### 3. JavaScript Logic (`script.js`)

The JavaScript file is the core of this application and includes functions to handle all user interactions:

* **Adding a Task**: Logic to read the value from the input field, create a new `<li>` element with the task text and buttons, and append it to the `todoList`.
* **Editing a Task**: The `editTask(span)` function prompts the user for new text and updates the `textContent` of the selected task if the new input is valid (not empty).
* **Removing a Task**: A function that identifies the parent `<li>` element of the clicked "Delete" button and removes it from the DOM.
