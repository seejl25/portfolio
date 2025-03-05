const projects = document.querySelector("#projects")
const projectItems = document.querySelectorAll(".project-items");
const projectDescription = document.querySelectorAll(".description");

projectItems.forEach(eachItem => {
    eachItem.addEventListener("mouseenter", () => {
        if (eachItem.children[1].firstElementChild.textContent === "Calculator") {
            const newPara = document.createElement("p");
            newPara.textContent = "A calculator project that tests my understanding of Javascript. Find out more by clicking the buttons!"
            eachItem.children[1].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[1].firstElementChild.textContent === "Recipe Webpage") {
            const newPara = document.createElement("p");
            newPara.textContent = "A recipe website that lets me flaunt my creativity with CSS. Find out more by clicking the buttons!"
            eachItem.children[1].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[1].firstElementChild.textContent === "Rock Paper Scissors Game") {
            const newPara = document.createElement("p");
            newPara.textContent = "A game that tests my logic using Javascript. Find out more by clicking the buttons!"
            eachItem.children[1].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[1].firstElementChild.textContent === "Tuition Webpage") {
            const newPara = document.createElement("p");
            newPara.textContent = "First ever webpage after learning basic HTML and CSS. Find out more by clicking the buttons!"
            eachItem.children[1].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[1].firstElementChild.textContent === "Etch-a-sketch") {
            const newPara = document.createElement("p");
            newPara.textContent = "A sketch grid that tests my knowledge of flexbox. Find out more by clicking the buttons!"
            eachItem.children[1].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
    })
})



