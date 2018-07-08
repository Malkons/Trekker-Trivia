$(document).ready(function () {

    var timeDown = 60;
    var intervalId;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    //set up start page
    $("#timer").hide();
    $("#questions").hide();
    $(".results").hide();

    // stop timer funtion
    function stopClock() {
        clearInterval(intervalId);
    }
    // timer set to countdown from 120.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timeDown--;
        $("#timer").html("Time Remaining: " + timeDown);

        if (timeDown === 0) {
            $("#questions").hide();
            $("#timer").hide();
            stopClock();
            checkAnswers();
            displayResults();
        }
    }

    // reset function
    function reset() {
        $("#timer").hide();
        $("#questions").hide();
    }

    // start button
    $("#start").on("click", function () {
        run();
        $("#start").hide();
        $("#timer").show();
        $("#questions").show();
    });

    // submit button
    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#questions").hide();
        stopClock();
        checkAnswers();
        displayResults();
    });

    // check User answers with correct answers
    function checkAnswers() {
        
        // grabs answers from the form and stores them in variables 
        var q1 = document.forms["question-form"]["question1"].value;
        var q2 = document.forms["question-form"]["question2"].value;
        var q3 = document.forms["question-form"]["question3"].value;
        var q4 = document.forms["question-form"]["question4"].value;
        var q5 = document.forms["question-form"]["question5"].value;
        var q6 = document.forms["question-form"]["question6"].value;
        var q7 = document.forms["question-form"]["question7"].value;
        var q8 = document.forms["question-form"]["question8"].value;

        // answer key
        var correctAnswers = ['b', 'a', 'c', 'a', 'd', 'd', 'a', 'c'];

        // question 1
        $("input:radio[name='question-form']").is(":checked"); // check for answer, if there is no answer, return false
        if (q1 === correctAnswers[0]) { //if there is an answer and its equal to the first index in the correctAnswer array
            correct++;  // increment correct by 1
        } else if (q1 == false) { // if the answer is false
            unanswered++; // increment unaswered by 1
        } else // if not false and not equal to the index in the array, 
            wrong++; // increment wrong by 1

        // question 2
        $("input:radio[name='question-form']").is(":checked");
        if (q2 === correctAnswers[1]) {
            correct++;
        } else if (q2 == false) {
            unanswered++;
        } else
            wrong++;

        // question 3
        $("input:radio[name='question-form']").is(":checked");
        if (q3 === correctAnswers[2]) {
            correct++;
        } else if (q3 == false) {
            unanswered++;
        } else
            wrong++;

        // question 4
        $("input:radio[name='question-form']").is(":checked");
        if (q4 === correctAnswers[3]) {
            correct++;
        } else if (q4 == false) {
            unanswered++;
        } else
            wrong++;

        // question 5
        $("input:radio[name='question-form']").is(":checked");
        if (q5 === correctAnswers[4]) {
            correct++;
        } else if (q5 == false) {
            unanswered++;
        } else
            wrong++;

        // question 6
        $("input:radio[name='question-form']").is(":checked");
        if (q6 === correctAnswers[5]) {
            correct++;
        } else if (q6 == false) {
            unanswered++;
        } else
            wrong++;

        // question 7
        $("input:radio[name='question-form']").is(":checked");
        if (q7 === correctAnswers[6]) {
            correct++;
        } else if (q7 == false) {
            unanswered++;
        } else
            wrong++;

        // question 8
        $("input:radio[name='question-form']").is(":checked");
        if (q8 === correctAnswers[7]) {
            correct++;
        } else if (q8 == false) {
            unanswered++;
        } else
            wrong++;
    }

    // display answers function
    function displayResults() {
        $(".results").show();
        $("#timer").hide();
        $("#correct").html("Correct: " + correct);
        $("#wrong").html("Wrong: " + wrong);
        $("#unanswered").html("Unanswered: " + unanswered);
    }
});