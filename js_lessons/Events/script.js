console.log("Test")



const appDataBase = {
    numberOfHtmlCklicks :0,
    eventButtonState: false,
    userboxLocation: {
        positionX: 0,
        positionY: 0
    }
};

const myButton = document.querySelector("#myButton");
const eventButton = document.querySelector("#eventButton");
const userBox = document.querySelector("#userBox");

function onHtmlCklick() {
    appDataBase.numberOfHtmlCklicks += 1;
    console.log(appDataBase.numberOfHtmlCklicks);
}



function onHtmlCklickDecrease() {
    appDataBase.numberOfHtmlCklicks -= 1;
    console.log(appDataBase.numberOfHtmlCklicks);
}

function onExternalLink(targetLink) {
    location.href = targetLink;
}


myButton.onclick = onHtmlCklickDecrease;

eventButton.addEventListener("click", (event) => {
    console.log("click by EventListener",
    appDataBase.numberOfHtmlCklicks);

    console.log(event);

    appDataBase.eventButtonState = !appDataBase.eventButtonState;

    if(appDataBase.eventButtonState) {
        event.target.style = `
        background: red;
        padding: 10px;
        color: #fff;
        border: 0px;
        `;
    }
    else {
    event.target.style = `
    background: green;
    padding: 10px;
    color: #fff;
    border: 0px;
    `;}
});

document.addEventListener("click", (event) => {
    console.log(event.target.dataset)
    if(event.target.dataset.buttonSet === "clicker") {
        console.log("Here is clicker")
    } else if(event.target.dataset.buttonSet === "cat") {
        console.log("Hello I am a cat")
    }
});


document.addEventListener("keydown", (event) => {
    console.dir(event)

    let minimalStep = 5;

    if(event.keyCode === 37){
        console.log("Move Left");
        assingValue("left", minimalStep)
    }
    
    else if(event.keyCode === 38){
        console.log("Move Up");
        assingValue("up", minimalStep)
    } 
    
    else if(event.keyCode === 39){
        console.log("Move Right");
        assingValue("right", minimalStep)
    } 
    
    else if(event.keyCode === 40){
        console.log("Move Down");
        assingValue("down", minimalStep)
    }
});


function assingValue(keyStatus, step){
if(keyStatus === "left") {
    appDataBase.userboxLocation.positionX -= step;
} else if(keyStatus === "up") {
    appDataBase.userboxLocation.positionY -= step;
}  else if(keyStatus === "right") {
    appDataBase.userboxLocation.positionX += step;
} else if(keyStatus === "down") {
    appDataBase.userboxLocation.positionY += step;
}

placeUserBox()

};



function placeUserBox(){
  let positionX = appDataBase.userboxLocation.positionX;
  let positionY = appDataBase.userboxLocation.positionY;
  userBox.style = `margin-top: ${positionY}px;
  margin-left: ${positionX}px`;
};


