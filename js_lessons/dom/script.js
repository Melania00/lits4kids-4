//console.log("Js work")

const renderRedBox = document.getElementById("render-red-box");

console.dir(
    renderRedBox
);
console.log(
    renderRedBox,
     renderRedBox.offsetTop,
      renderRedBox.clssName,
      renderRedBox.innerText
      );

      renderRedBox.innerText = "Hello";

      renderRedBox.innerHTML = "<h2>World JS</h2>";

      renderRedBox.className = "box blue";

      renderRedBox.style = "margin-top: 100px; margin-left: 30px;";


      let width = 100;
      let maxWidth = 1000;
      let blockResizeStatus = "TO_LARGE"; // TO_SMALL

      function resizeBlockAimation(){
          if(blockResizeStatus === "TO_LARGE"){
              width += 1;
          }else if(blockResizeStatus === "TO_SMALL"){
              width -= 1;
          }
          if(width > maxWidth && blockResizeStatus === "TO_LARGE"){
              blockResizeStatus = "TO_SMALL";
          }
          if(width > maxWidth && blockResizeStatus === "TO_SMALL"){
            blockResizeStatus = "TO_LARGE";
          }
      }

      setInterval(() => {
          resizeBlockAimation()
      }, 500);






