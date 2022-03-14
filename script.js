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
    let randomBtn = document.getElementById("random");

    randomBtn.addEventListener("click", function() {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            mainDiv.textContent = "";
            
            data.data.forEach(function (el) {
                let subDiv = document.createElement("div");
                subDiv.setAttribute("class", "subDiv");
    
                
                const yellowDiv = document.createElement("div");
                yellowDiv.setAttribute("class", "line");
    
                const p = document.createElement("p");
                p.textContent = el.quoteText;
    
                subDiv.append(yellowDiv, p);
                mainDiv.appendChild(subDiv);
    
                const nameA = document.querySelector(".aName");
                nameA.textContent = el.quoteAuthor;
    
                const genreA = document.querySelector(".aGenre");
                genreA.textContent = el.quoteGenre;
                
                localStorage.setItem("author", JSON.stringify(el.quoteAuthor))
    
            });
    
        })
    })