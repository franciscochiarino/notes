// Variables
const form = document.querySelector('form');
let tasks = [];

// Function
const addNote = (e) => {
    e.preventDefault();

    // Get ul
    let ul = document.querySelector('ul');

    // Push string to taks array
    input = document.querySelector('input[type="text"]');
    tasks.push(input.value);

    // Create elements for each task
    tasks.forEach(task => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const text = document.createTextNode(task);
        const x = document.createTextNode('x');

        // Append elements
        span.appendChild(x);
        li.append(text, span);
        ul.appendChild(li);
    })

}

form.addEventListener('submit', addNote);