window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "What is the capital of USA?",
        answer: "Washington, D.C.",
        options: [
            "New York",
            "Chicago",
            "Washington, D.C.",
            "Las Vegas"
        ]
    },
    {
        id: 2,
        question: "Who invented the computer?",
        answer: "Charles Babbage",
        options: [
            "Albert Einstein",
            "Charles Babbage",
            "Thomas Edison",
            "John Vincent"
        ]
    },
    {
        id: 3,
        question: "What is the abbreviation of HTML?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hyper Tool Markup Language",
            "Hyper Tool Maker Language",
            "High Tabular Markup Language"
        ]
    },
    {
        id: 4,
        question: "Who is called The Father of Chemistry?",
        answer: "Antoine Lavoisier",
        options: [
            "Albert Einstein",
            "Marie Curie",
            "John Dalton",
            "Antoine Lavoisier"
        ]
    },
    {
        id: 5,
        question: "Who is the first prime minister of Pakistan?",
        answer: "Liaquat Ali Khan",
        options: [
            "Chaudhry Mohammad Ali",
            "Liaquat Ali Khan",
            "Mohammad Ali Jinnah",
            "Imran Khan"
        ]
    }
];
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("nameStart").value;
    sessionStorage.setItem("name", name);
    
    var user$name = document.getElementById("nameStart").value;
    if (user$name == "") {
        alert("Enter your Name!")
        location.href = "index.html"
    }else{
        location.href = "quiz.html";
    }
    // console.log(name)
}

let question_count = 0
let points = 0

function next() {
    let user_ans = document.querySelector("li.option.active").innerHTML;

    if (user_ans == questions[question_count].answer) {
        points += 10
        sessionStorage.setItem("points", points);
    }

    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${mins} minutes and ${secs} seconds`);
        clearInterval(mytime)
        location.href = "end.html";
        return;
    }



    question_count++
    show(question_count);
}
function show(count) {
    let question = document.getElementById("questions")
    question.innerHTML = `<h2>${questions[count].question}</h2>
        <ul class="option-group">
            <li class="option">${questions[count].options[0]}</li>
            <li class="option">${questions[count].options[1]}</li>
            <li class="option">${questions[count].options[2]}</li>
            <li class="option">${questions[count].options[3]}</li>
        </ul> `
    activeO();
}
function activeO() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}