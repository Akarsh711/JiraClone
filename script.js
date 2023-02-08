let addBTn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont")
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont");

let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length-1];

let addFlag = false;

// Listener for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e)=> {
        allPriorityColors.forEach((priorityColorElem, idx) =>{
            priorityColorElem.classList.remove("border");
        })

        colorElem.classList.add("border");
        
        modalPriorityColor = colorElem.classList[0];
    })
})

addBTn.addEventListener("click", (e) =>{
    //Display Modal
    // Generate ticket 

    // AddFlag, true -> Modal Display
    // AddFlag, False -> Modal None
    addFlag = !addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    } else{
        modalCont.style.display = "None";
    }
});

modalCont.addEventListener("keydown", (e) =>{
    let key = e.key;
    if(key === "Shift"){
        // funciton shortid() is coming from shortid-dist package in form of cdn
        createTicket(modalPriorityColor, textAreaCont.value, shortid());
        modalCont.style.display = "None";
        addFlag = false;
        textAreaCont.value = "";
    }
    
});

function createTicket(ticketColor, ticketTask, ticketID){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${ticketID}</div>
        <div class="task-area">${ticketTask}</div>
        `;

    mainCont.appendChild(ticketCont);
}