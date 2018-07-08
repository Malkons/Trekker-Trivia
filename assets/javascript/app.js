/*  1. Countdown Timer:
        a. Start timer at 120 seconds
        b. once the timer reaches 0 stop timer
        c. submit form information
    2.  Submit Button:
        a. submit form information
        b. calculates the correct/wrong/unanswered questions
        c. shows results of quiz
    3. Start Button:
        a. loads the form
        b. starts the Countdown Timer
    4. <div> Container:
        a. replace contents with a div with a border that conatians resutls of quiz
        b. has the start button on it to restart quiz
        c. hide the questions and the timer. click start button, unhide questions and timer, and start timer  */

$(document).ready(function () {

    var timeDown = 60;

    var intervalId;

    var correct = 0;

    var wrong = 0;

    var unanswered = 0;



    $("#timer").hide();
    $("#questions").hide();
    $(".results").hide();

    // timer set to countdown from 120.
    function stopClock() {
        clearInterval(intervalId);
    }

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


    // TODO: Reset Function
    function reset() {
        $("#timer").hide();
        $("#questions").hide();
    }

    // TODO: Start Button
    $("#start").on("click", function () {
        run();
        $("#start").hide();
        $("#timer").show();
        $("#questions").show();

    });


    // TODO: Submit Button
    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#questions").hide();
        stopClock();
        checkAnswers();
        displayResults();
    });

    // TODO: check User Answers with Correct Answers
    function checkAnswers() {
        console.log(document.forms["question-form"]);
        var q1 = document.forms["question-form"]["question1"].value;
        var q2 = document.forms["question-form"]["question2"].value;
        var q3 = document.forms["question-form"]["question3"].value;
        var q4 = document.forms["question-form"]["question4"].value;
        var q5 = document.forms["question-form"]["question5"].value;
        var q6 = document.forms["question-form"]["question6"].value;
        var q7 = document.forms["question-form"]["question7"].value;
        var q8 = document.forms["question-form"]["question8"].value;

        var correctAnswers = ['b', 'a', 'c', 'a', 'd', 'd', 'a', 'c'];

        // question 1
        $("input:radio[name='question-form']").is(":checked");
        if (q1 === correctAnswers[0]) {
            correct++;
        } else if (q1 == false) {
            unanswered++;
        } else
            wrong++;

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

    // TODO: display answers
    function displayResults() {
        $(".results").show();
        $("#timer").hide();
        $("#correct").html("Correct: " + correct);
        $("#wrong").html("Wrong: " + wrong);
        $("#unanswered").html("Unanswered: " + unanswered);


    }

});