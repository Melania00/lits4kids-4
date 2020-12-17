const timerScriptDB = {
    timerAssets: [
        {
          id:'1',
          monthName:'Jauary',
          pictureUrl:'',
          mainColor:'#blue',
          secondoryColor:'#light-blue'
        },
        {
          id:'2',  
          monthName:'Fabruary',
          pictureUrl:'',
          mainColor:'##0099ff',
          secondoryColor:'#1aa3ff'
        },
        {
            id:'3',
            monthName:'March',
            pictureUrl:'',
            mainColor:'#00ccff',
            secondoryColor:'#1ad1ff'
          },
          {
              id:'4',
            monthName:'April',
            pictureUrl:'',
            mainColor:' #ffb3ff',
            secondoryColor:'#ffccff'
          },
          {
              id:'5',
            monthName:'May',
            pictureUrl:'',
            mainColor:'#d9b3ff',
            secondoryColor:'#e6ccff'
          },
          {
              id:'6',
            monthName:'June',
            pictureUrl:'',
            mainColor:'#ffcc66',
            secondoryColor:'#ffd480'
          },
          {
              id:'7',
            monthName:'July',
            pictureUrl:'',
            mainColor:'#ffcc00',
            secondoryColor:'#ffd633'
          },
          {
              id:'8',
            monthName:'August',
            pictureUrl:'',
            mainColor:'#bfff00',
            secondoryColor:'#c6ff1a'
          },
          {
              id:'9',
            monthName:'September',
            pictureUrl:'',
            mainColor:'#ffcc00',
            secondoryColor:'#ffd11a'
          },
          {
            id:'10',
            monthName:'October',
            pictureUrl:'',
            mainColor:'#ff9900',
            secondoryColor:'#ffad33'
          },
          {
            id:'11',
            monthName:'November',
            pictureUrl:'',
            mainColor:'#cc6600',
            secondoryColor:'#ff8000'
          },
          {
            id:'12',
            monthName:'December',
            pictureUrl:'',
            mainColor:'#6666ff',
            secondoryColor:'#9999ff'
          },
    ],
    currentTime: ''
}

const timerSettings = {
    timerAssets: timerScriptDB.timerAssets,
    currentTime: null,
    selectors: {
        pageTimer: document.querySelector('#page-timer'),
        pictureArea: document.querySelector('body'),
        classStyleSeason: document.querySelectorAll('.season-style')
    }
    
}


/*  Timer engine  */
let timeEngine = setInterval(function(){
    console.log(1)
        timerUpdate(timerSettings);
        showTime(timerSettings);

        // clearInterval(timeEngine)
},1000);

/*  Timer updates   */
function timerUpdate(timerData){
    timerData.currentTime = new Date();
}

/*  Timer display  */
function showTime(timerData){
    let year = timerData.currentTime.getFullYear();
    let month = timerData.currentTime.getMonth() + 1;
    let day = timerData.currentTime.getDay();
    let hours = timerData.currentTime.getHours();
    let minutes = timerData.currentTime.getMinutes();
    let seconds = timerData.currentTime.getSeconds();

    let currentMonthObject = timerData.timerAssets[month - 1];
    let timeTarget = timerData.selectors.pageTimer;

    let timerText = `
    <h3>${currentMonthObject.monthName} ${year}</h3>
   <p>${month}/${day}/${hours}:${minutes} ${seconds}</p>`

    displayTime(timeTarget, timerText)

}

function displayTime(target, text) {
    target.innerHTML = text;
}

/* Set time data  */






