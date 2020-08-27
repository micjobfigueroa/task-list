// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event
	taskList.addEventListener('click', removeTask);
	// Clear task event
	clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task');
	}

	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);

	// Append li to ul
	taskList.appendChild(li);

	// Clear input
	taskInput.value = '';

	e.preventDefault();
}

/* <li class="collection-item">
	Value
	<a class="delete-item secondary-content">
		<i class="fa fa-remove"></i>
	</a>
</li> */

//Remove Task
function removeTask(e) {
	// console.log(e.target);
	if (e.target.parentElement.classList.contains('delete-item')) {
		// console.log(e.target);
		e.target.parentElement.parentElement.remove();
		if (confirm('Are You Sure?')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

// Clear Tasks
function clearTasks() {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	taskList.innerHTML = '';
}
//OR

// function clearTasks() {
// 	taskList.innerHTML = '';
// }
// https://jsperf.com/innerhtml-vs-removechild
