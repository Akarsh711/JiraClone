let addBTn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont")
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let addFlag = false;

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
        modalCont.style.display = "None";
        addFlag = false;
        textareaCont.value = "";
        createTicket();
    }
    
});

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color"></div>
        <div class="ticket-id">Sample_id</div>
        <div class="task-area">
            bis perspiciatis earum. Illum facilis facere soluta architecto obcaecati ab mollitia possimus quam!
        </div>
        `;

    mainCont.appendChild(ticketCont);
}