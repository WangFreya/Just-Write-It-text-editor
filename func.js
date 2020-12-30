/** 
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
    document.getElementById("titleForm").innerHTML = userTitle;
}

titleSubmit.addEventListener('click', getTitle);

//Goal update
const goalSubmit = document.querySelector('.goalSubmit');
const goalField = document.querySelector('.goalField');

function getGoal() {
    let userGoal = goalField.value;
    document.getElementById("goalForm").innerHTML = userGoal;
}

goalSubmit.addEventListener('click', getGoal);

//Text area
/*
Save info in textbox as string
calculate wordcount
update wordcount as words are types
*/

function getCounts() {
    let str = document.getElementById("textField").value;
    let wordCount = str.split(" ").length;
    document.getElementById("wordCount").innerHTML = wordCount;

    //let charCount = str.split().length;
    let charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ') {
            charCount += 1;
        }
    }
    document.getElementById("charCount").innerHTML = charCount;
}



