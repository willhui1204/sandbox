/********* create variables *********/
/*useful variables might be: the cost per day, the number of days selected, and elements on the screen that will 
be clicked or will need to be modified. 
Do any of these variables need to be initialized when the page is loaded? 
When do they need to be reset or updated?*/
let costPerDay = 0;
let numberOfDay = 0;

/********* colour change days of week *********/
/*when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other 
relevant variables. Then, we can recalculate the total cost.
added challenge: don't update the dayCounter if the same day is clicked more than once. 
hint: .classList.contains() might be helpful here!*/
let dayButton = document.getElementsByClassName("blue-hover");
function changeColour (event){
    if (!event.target.classList.contains("clicked")){
        event.target.classList.add("clicked");
        numberOfDay++;
        recalculate();
    }
}

for (let i=0; i < dayButton.length; i++) {
    if (dayButton[i].nodeName == 'LI') {
        dayButton[i].addEventListener("click", changeColour);
    }
}

/********* clear days *********/
/*when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables 
are reset, and the calculated cost is set to 0.*/
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);
function clearDays() {
    for (let i=0; i < dayButton.length; i++) {
        if (dayButton[i].nodeName == "LI"){
            dayButton[i].classList.remove("clicked");
        }
    }
    numberOfDay = 0;
    cost.innerHTML = 0;
}

/********* change rate *********/
/*when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, 
remove it from the "full" element, and recalculate the total cost.*/
let halfButton = document.getElementById("half");
halfButton.addEventListener("click", halfDay);
function halfDay() {
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    recalculate();
}

/*when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" 
and removed from "half", and the total cost is recalculated.*/
let fullButton = document.getElementById("full");
fullButton.addEventListener("click", fullDay);
function fullDay() {
    costPerDay = 35;
    halfButton.classList.remove("clicked");
    fullButton.classList.add("clicked");
    recalculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
let cost = document.getElementById("calculated-cost");
function recalculate() {
    cost.innerHTML = costPerDay * numberOfDay;
}

