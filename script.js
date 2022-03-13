let btn = document.getElementById("btn");
let mainDiv = document.querySelector(".main")

fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        data.data.forEach(function (el) {
            const yellowDiv = document.createElement("div");
            yellowDiv.setAttribute("class", "line");

            const p = document.createElement("p");
            p.textContent = el.quoteText;
            p.setAttribute("class", "para");

            mainDiv.append(yellowDiv, p)
        });

    })

const author = "Bill Gates";
let bttn = document.getElementById("bttn");
let main = document.getElementById("main");

fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=3`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        data.data.forEach(function (el) {
            const p = document.createElement("p");
            p.textContent = el.quoteText;

            main.appendChild(p)
        });

    })

