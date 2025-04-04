const projects = document.querySelector("#projects")
const projectItems = document.querySelectorAll(".project-items");
const projectDescription = document.querySelectorAll(".description");

projectItems.forEach(eachItem => {
    eachItem.addEventListener("mouseenter", () => {
        if (eachItem.children[3].firstElementChild.textContent === "Calculator") {
            const newPara = document.createElement("p");
            newPara.textContent = "A calculator project that tests my understanding of Javascript. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Recipe Webpage") {
            const newPara = document.createElement("p");
            newPara.textContent = "A recipe website that lets me flaunt my creativity with CSS. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Admin Dashboard") {
            const newPara = document.createElement("p");
            newPara.textContent = "An admin dashboard layout using CSS Grid. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Rock Paper Scissors Game") {
            const newPara = document.createElement("p");
            newPara.textContent = "A game that tests my logic using Javascript. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Tuition Webpage") {
            const newPara = document.createElement("p");
            newPara.textContent = "First ever webpage after learning basic HTML and CSS. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Etch-a-sketch") {
            const newPara = document.createElement("p");
            newPara.textContent = "A sketch grid that tests my knowledge of flexbox. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Sign-up form") {
            const newPara = document.createElement("p");
            newPara.textContent = "A sign-up form that tests my styling skills. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "My Library") {
            const newPara = document.createElement("p");
            newPara.textContent = "A library page that displays and adds books using Javascript. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Tic-tac-toe") {
            const newPara = document.createElement("p");
            newPara.textContent = "A tic-tac-toe game designed with mainly Javascript. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "Restaurant Webpage") {
            const newPara = document.createElement("p");
            newPara.textContent = "A restaurant webpage built using npx webpack, import and exporting of JS scripts. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
        else if (eachItem.children[3].firstElementChild.textContent === "To-Do List") {
            const newPara = document.createElement("p");
            newPara.textContent = "A to-do list that allows user to create projects and tasks they need to do. Find out more by clicking the buttons!"
            eachItem.children[3].appendChild(newPara);
            eachItem.addEventListener("mouseleave", () => {
                newPara.textContent = "";
            })
        }
    })
})



