
const keyList = document.querySelectorAll('.tecla');


function playSound (idElementAudio){

   const element = document.querySelector(idElementAudio);

   if (element === null && element.localName != 'audio'){
    console.log('Element not found or invalid selector');
   }

   if(element != null && element.localName === 'audio'){
    element.currentTime = 0;
    element.play();
    
   }
  
}

for (let count = 0; count < keyList.length; count++) {

    const key = keyList[count];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function (e) {
        playSound(idAudio);
    }
   
    
    
}
