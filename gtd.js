function doSomething() {
    let mainImg = document.getElementById("mainImg");
    let choicesContainer = document.getElementById("choices");
    let people = [
        { name: "Arison", src: "arison-legit.jpeg" },
        { name: "Ben", src: "ben-legit.jpeg" },
        { name: "Cameron", src: "cam-legit.jpeg" },
        { name: "Denis", src: "denis-legit.jpeg" },
        { name: "Djann", src: "djann-legit.jpeg" },
        { name: "Dominic", src: "dom-legit.jpeg" },
        { name: "Hanns", src: "hanns-legit.jpeg" },
        { name: "Jasmine", src: "jas-legit.jpeg" },
        { name: "Jeira", src: "jeira-legit.jpeg" },
        { name: "Jez", src: "jez-legit.jpeg" },
        { name: "Jian", src: "jian-legit.jpg" },
        { name: "Jj", src: "jj-legit.jpeg" },
        { name: "Josh", src: "josh-legit.jpeg" },
        { name: "Klaude", src: "klaude-legit.jpeg" },
        { name: "Kyle", src: "kyle-legit.jpeg" },
        { name: "Kz", src: "kz-legit.jpeg" },
        { name: "Lei", src: "lei-legit.jpeg" },
        { name: "Lex", src: "lex-legit.jpeg" },
        { name: "Mavis", src: "mavis-legit.jpeg" },
        { name: "Mil", src: "mil-legit.jpeg" },
        { name: "Nathan", src: "nath-legit.jpeg" },
        { name: "Renz", src: "renz-legit.jpeg" },
        { name: "Riz", src: "riz-legit.jpeg" },
        { name: "Russel", src: "russel-legit.jpeg" },
        { name: "Sean", src: "sean-legit.jpeg" },
        { name: "Seong Tae", src: "seong-tae-legit.jpeg" },
        { name: "Shyra", src: "shyra-legit.png" },
        { name: "Steven", src: "steven-legit.jpeg" },
        { name: "Wes", src: "wes-legit.jpeg" },
        { name: "Yanjel", src: "yanjel-legit.jpeg" },
        { name: "Ma'am Pam", src: "pam-legit.png" }

    ];
    let randomIndex = Math.floor(Math.random() * people.length);
    let selectedPerson = people[randomIndex];

    mainImg.style.opacity = 0;

    setTimeout(() => {

        mainImg.setAttribute("src", selectedPerson.src);


        mainImg.style.opacity = 1;
    }, 500);

    choicesContainer.innerHTML = "";

    people.forEach(person => {
        let button = document.createElement("button");
        button.textContent = person.name;
        button.className = "choice";
        button.onclick = function () {
            if (person.name === selectedPerson.name) {
                alert("Correct! You guessed " + person.name);
            } else {
                alert("Wrong! The correct answer is " + selectedPerson.name);
            }
            doSomething();
        };
        choicesContainer.appendChild(button);
    });
}

const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
    console.log('reached');
    button.addEventListener("click", e => {
        e.preventDefault();
        button.classList.add("animate");

        setTimeout(() => {
            button.classList.remove("animate");
            window.location.href = button.getAttribute("href");
        }, 600);
    });
}

