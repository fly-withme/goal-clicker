let goal_a = document.getElementById('goal_a');
let goal_b= document.getElementById("goal_b")


// Initialize Variables // 
score_a = 0;
score_b = 0;

// TEAM A //
function plusOne() {
    score_a += 1;
    goal_a.innerText = score_a; 
}

function plusTwo() {
    score_a += 2;
    goal_a.innerText = score_a;
}

function plusThree() {
    score_a += 3;
    goal_a.innerText = score_a;
}
 
/////////////////////////////////////////////////////


// TEAM B //
function plusOne_b(){
    score_b += 1;
    goal_b.innerText = score_b;
}

function plusTwo_b(){
    score_b += 2;
    goal_b.innerText = score_b;
}

function plusThree_b(){
    score_b += 3;
    goal_b.innerText = score_b;
}




