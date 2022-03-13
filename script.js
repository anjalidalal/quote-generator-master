let btn = document.getElementById("btn");
let mainDiv = document.querySelector(".main")

fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        data.data.forEach(function (el) {
            let subDiv = document.createElement("div");
            subDiv.setAttribute("class", "subDiv");

            
            const yellowDiv = document.createElement("div");
            yellowDiv.setAttribute("class", "line");

            const p = document.createElement("p");
            p.textContent = el.quoteText;

            subDiv.append(yellowDiv, p);
            mainDiv.appendChild(subDiv);
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
            let subDiv = document.createElement("div");
            subDiv.setAttribute("class", "subDiv");

            
            const yellowDiv = document.createElement("div");
            yellowDiv.setAttribute("class", "line");

            const p = document.createElement("p");
            p.textContent = el.quoteText;
            p.setAttribute("class", "p")

            subDiv.append(yellowDiv, p);
            main.appendChild(subDiv);
        });

    })


function showDiv() {

}