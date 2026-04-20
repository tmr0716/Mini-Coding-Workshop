function showSolution() {
    document.getElementById("solution").style.display = "block";
}
function checkAnswer(option) {
    let result = document.getElementById("result");
    if(option === 1){
        result.innerHTML = "Correct!";
        result.style.color = "green";
    }else{
        result.innerHTML = "Wrong Answer!";
        result.style.color = "red";
    }
}
