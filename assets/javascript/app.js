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

    var timeDown = 120;

    var intervalId;

    var correct = 0;

    var wrong = 0;

    var unanswered = 0;



    $("#timer").hide();
    $("#questions").hide();
    $("#results").hide();

    // timer set to countdown from 120.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timeDown--;
        $("#timer").html("Time Remaining: " + timeDown);

        if(timeDown === 0) {
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
    $("#submit").on("click", function () {
        $("#questions").hide();
       checkAnswers();
       displayResults();
       

    });

    // TODO: check User Answers with Correct Answers
    function checkAnswers() {

        var q1 = document.forms["question-form"]["q1"].value;
        var q2 = document.forms["question-form"]["q2"].value;
        var q3 = document.forms["question-form"]["q3"].value;
        var q4 = document.forms["question-form"]["q4"].value;
        var q5 = document.forms["question-form"]["q5"].value;
        var q6 = document.forms["question-form"]["q6"].value;
        var q7 = document.forms["question-form"]["q7"].value;
        var q8 = document.forms["question-form"]["q8"].value;

        var correctAnswers = [b, a, c, a, d, d, a, c];
        // question 1
        if (q1 == correctAnswers[0]) {
            correct++;
        } else if (q8 != correctAnswers[0]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 2
        if (q2 == correctAnswers[1]) {
            correct++;
        } else if (q2 != correctAnswers[1]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 3
        if (q3 == correctAnswers[2]) {
            correct++;
        } else if (q3 != correctAnswers[2]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 4
        if (q4 == correctAnswers[3]) {
            correct++;
        } else if (q4 != correctAnswers[3]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 5
        if (q5 == correctAnswers[4]) {
            correct++;
        } else if (q5 != correctAnswers[4]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 6
        if (q6 == correctAnswers[5]) {
            correct++;
        } else if (q6 != correctAnswers[5]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 7
        if (q7 == correctAnswers[6]) {
            correct++;
        } else if (q7 != correctAnswers[6]) {
            wrong++;
        } else {
            unanswered++;
        }

        // question 8
        if (q8 == correctAnswers[7]) {
            correct++;
        } else if (q8 != correctAnswers[7]) {
            wrong++;
        } else {
            unanswered++;
        }
    }

    // TODO: display answers
    function displayResults() {
        $("#correct").html("correct: " + correct);
        $("#wrong").html("wrong: " + wrong);
        $("#unanswered").html("unanswered: " + unanswered);
        console.log(correct);
        console.log(wrong);
        console.log(unanswered);
    }

});