var score = 0;
var count = 0;
var sec = -1;

var questions_array = [{
        question: "Which of the Following attribute is removed in HTML5?",
        answer: "All Above",
        options: [
            "text", "rules", "link", "All Above"
        ]
    },
    {
        question: "Correct HTML tag for the largest heading is:",
        answer: "h1",
        options: [
            "head", "h6", "heading", "h1"
        ]
    },
    {
        question: "The attribute of form tag:",
        answer: "both a and b",
        options: [
            "Method", "Action", "both a and b", "None of these"
        ]
    },
    {
        question: "which of the following tag is used to mark a begining of paragraph ?",
        answer: "p",
        options: [
            "td", "br", "p", "pr"
        ]
    },
    {
        question: "From which tag descriptive list starts ?",
        answer: "dl",
        options: [
            "dl", "td", "dd", "dt"
        ]
    }
]





var btn = document.getElementById("start-quiz");
btn.onclick = function() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    if (name.checkValidity() === false || email.checkValidity() === false) {
        return;
    } else {
        var div = document.getElementById("quiz");
        div.style.transform = 'rotate(360deg)';
        var setName = document.getElementById("setName");
        setName.innerHTML = name.value;
        interval = setInterval(timer, 1000);
        setQuiz(count);

    }
}

var next = document.getElementById("next");

next.onclick = function() {
    var go = validation();
    if (go === 1) {
        alert("Please Select an Option")
    } else {
        sec = -1;
        count++;
        if (count === questions_array.length) {
            checkAnswer(count);
            showResult();
            removeActive();
            clearInterval(interval);
        } else {
            checkAnswer(count);
            removeActive();
            setQuiz(count);
        }
    }
}


function validation() {
    let selected = document.querySelector("button.option.active");
    if (selected === null) {
        return 1;
    } else {
        return 2;
    }
}





function showResult() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    var quiz = document.getElementById("login");
    quiz.style.display = "none";
    var result = document.getElementById("result");
    result.style.display = "block";
    var showName = document.getElementById("showName");
    showName.innerHTML = name.value;
    var showEmail = document.getElementById("showEmail");
    showEmail.innerHTML = email.value;
    var showMarks = document.getElementById("showMarks");
    showMarks.innerHTML = score * 10;


    if (score >= 3) {
        var showRemarks = document.getElementById("showRemarks");
        showRemarks.innerHTML = "PASSED";
    } else {
        var showRemarks = document.getElementById("showRemarks");
        showRemarks.innerHTML = "FAILED";
    }

    if (score === 5) {
        var showRemarks = document.getElementById("showRemarks");
        showRemarks.innerHTML += " (Excelent)"
    }
    if (score === 0) {
        var showRemarks = document.getElementById("showRemarks");
        showRemarks.innerHTML += " (Disaster)"
    }

}





function checkOption() {
    var buttons = document.querySelectorAll("button.option");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            for (let j = 0; j < buttons.length; j++) {
                if (buttons[j].classList.contains("active")) {
                    buttons[j].classList.remove("active");
                }
            }
            buttons[i].classList.add("active");
        }
    }
}



function removeActive() {
    var buttons = document.querySelectorAll("button.active");
    for (let j = 0; j < buttons.length; j++) {
        if (buttons[j].classList.contains("active")) {
            buttons[j].classList.remove("active");
        }
    }

}


function checkAnswer(num) {
    let a = document.querySelector("button.option.active");

    if (a.innerHTML === questions_array[num - 1].answer) {
        score++;
    }

}


function setQuiz(num) {
    checkOption();

    var ques = document.getElementById("ques");
    ques.innerHTML = questions_array[num].question;

    var option1 = document.getElementById("option1");
    option1.innerHTML = questions_array[num].options[0];

    var option2 = document.getElementById("option2");
    option2.innerHTML = questions_array[num].options[1];

    var option3 = document.getElementById("option3");
    option3.innerHTML = questions_array[num].options[2];

    var option4 = document.getElementById("option4");
    option4.innerHTML = questions_array[num].options[3];


}




function refresh() {
    count = 0;
    score = 0;

    var login = document.getElementById("login");
    login.style.display = "block";
    var result = document.getElementById("result");
    result.style.display = "none";
    var quiz = document.getElementById("quiz");
    quiz.style.transform = "rotateY(180deg)";

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    name.value = "";
    email.value = "";
}




function timer() {
    sec++;
    var counter = document.getElementById("counter");
    counter.innerHTML = sec + "/30";
    if (sec >= 30) {
        count++;
        sec = -1;
        var go = validation();
        if (go === 1) {
            if (count === questions_array.length) {
                showResult();
                removeActive();
                clearInterval(interval);
            } else {
                setQuiz(count);
            }
        } else {
            if (count === questions_array.length) {
                checkAnswer(count);
                showResult();
                removeActive();
                clearInterval(interval);
            } else {
                checkAnswer(count);
                removeActive();
                setQuiz(count);
            }
        }

    }
}