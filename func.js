/** 
 * Set default values
 * Save word goal, title, and text 
 * replace title box with inputed title
 * replace goal box with inputed word count goal
 * as user types update wordcount
 * start timer when user types
 * let user hit pause on timer at any time + continue
 * let user export text as word doc or to drive
*/
//getTitle();

//Title update
const titleSubmit = document.querySelector('.titleSubmit');
const titleField = document.querySelector('.titleField');

function getTitle() {
    let userTitle = titleField.value;
    document.getElementById("newTitle").innerHTML = userTitle;
    document.getElementById("titleForm").reset();
}

titleSubmit.addEventListener('click', getTitle);

//Goal update
const goalSubmit = document.querySelector('.goalSubmit');
const goalField = document.querySelector('.goalField');

function getGoal() {
    let userGoal = goalField.value;
    document.getElementById("newGoal").innerHTML = userGoal;
    document.getElementById("goalForm").reset();
}

goalSubmit.addEventListener('click', getGoal);
