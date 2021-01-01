//Initialized variables
let goal;
let allWords;

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
    goal = userGoal;
    document.getElementById("goalForm").innerHTML = userGoal;
}

function checkGoal() {
    if (goal == allWords) {
        document.getElementById("achieveGoal").innerHTML = "You achieved your word count goal!";
    }
}

goalSubmit.addEventListener('click', getGoal);

//Text area + Char/Word counts
let noWord = 0;
document.getElementById("wordCount").innerHTML = noWord;

let noChar = 0;
document.getElementById("charCount").innerHTML = noWord;

function getCounts() {
    let str = document.getElementById("textField").value;
    let words = str.split(" ").length;
    document.getElementById("wordCount").innerHTML = words;
    allWords = words;
    checkGoal();
    
    let charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ') {
            charCount += 1;
        }
    }
    charCount += 1;
    document.getElementById("charCount").innerHTML = charCount;
}

//Download File
function downloadFile() {
    let fileName = document.getElementById("newTitle").value;
    let textToSave = document.getElementById("textField").value;
    download(fileName, textToSave);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }







