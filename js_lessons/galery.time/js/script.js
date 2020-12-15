console.log('Work')

const controlObject = {
    galleryMainBase: [{
        id: 1,
        url: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg?fit=1024%2C684&ssl=1",
        title: "Title 1",
        description: "Litle description abour the city 1"
    },{
        id: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDVy0oz5man04q9kEQYDb8flw8MribNFWEA&usqp=CAU",
        title: "Title 2",
        description: "Litle description abour the city 2"
    },{
        id: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3peU5B6_8ZqnFbOttelocs04a8coGws3Lqw&usqp=CAU",
        title: "Title 3",
        description: "Litle description abour the city 3"
    }],
    timerSeasonSets: [],
    gallerySettings: {
        currentImageIndex: 0
    },
    selectors : {
        pageTimer: document.querySelector('#page-timer'),
        galleryDisplayArea: document.querySelector('#gallery-display-area')
        //class selector must be
    }
}


/*Events gallery left right click*/
document.addEventListener("click", (e) => {
    console.log(e.target.dataset)
    const galleryBtn = e.target.dataset.galleryBtn;
    if(galleryBtn === "left"){
        //alert ("left")
        changeGalleryItem(-1,controlObject)
    }else if(galleryBtn === "right"){
        //alert("right")
        changeGalleryItem(1,controlObject)
    } 
    assignGalleyElemet(controlObject)
});

/*Assign image src ? create new object*/
function changeGalleryItem(step, mainObject){
    let galleryMainBaseLength = mainObject.galleryMainBase.length;
    mainObject.gallerySettings.currentImageIndex += step;
    

    if(mainObject.gallerySettings.currentImageIndex >= galleryMainBaseLength){
        mainObject.gallerySettings.currentImageIndex = 0;
    }else if(mainObject.gallerySettings.currentImageIndex < 0){
        mainObject.gallerySettings.currentImageIndex = galleryMainBaseLength -1;
    }
    console.log(mainObject.gallerySettings.currentImageIndex)
    
}
function assignGalleyElemet(mainObject){
   let galleryDisplayArea = mainObject.selectors.galleryDisplayArea;
   let galleryMainBase = mainObject.galleryMainBase;
   let currentImageIndex = mainObject.gallerySettings.currentImageIndex;

   let currentGallary = galleryMainBase[currentImageIndex];
   let galleryImage = createNewElement({
       tag: "img",
       styleClasse: "gallery-item",
       src: currentGallary.url
   });
   galleryDisplayArea.innerHTML = "";
   galleryDisplayArea.appendChild(galleryImage)
}

/*Create new element*/
function createNewElement(elementInformation) {
    const newElement = document.createElement(elementInformation.tag);
    if(elementInformation.styleClasse) newElement.className = elementInformation.styleClasse;
    if(elementInformation.tag === 'img' && elementInformation.src){
        newElement.src = elementInformation.src;
    }
    if(elementInformation.innerText) newElement.innerHTML = elementInformation.innerText;
    return newElement  
}
