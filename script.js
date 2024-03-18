const addBtn = document.querySelector('.add');
const tasks = document.querySelector('.tasks');

addBtn.addEventListener('click', () => {
    const taskText = document.getElementById('field').value;
    const taskLi = document.createElement('li'); // Create a <li> element for the task
    const taskParagraph = document.createElement('p'); // Create a <p> element for the task text
    taskParagraph.textContent = taskText; // Set the text content of the <p> element
    const doneBtn = document.createElement('button'); // Create a button for marking task as done

    doneBtn.textContent = 'Done'; // Set button text
    

    taskLi.appendChild(taskParagraph); // Append the <p> element to the <li>
    taskLi.appendChild(doneBtn); // Append the done button to the <li>
    tasks.appendChild(taskLi); // Append the <li> to the task list
    doneBtn.addEventListener('click', () => {
        taskLi.remove();
    });

});
