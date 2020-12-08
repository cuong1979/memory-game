'use strict'

// import från API.js och Cardconstructor.js
import {Kort} from '/Cardconstructor.js';
import {fetchImages} from '/API.js';




// spelet funktioner
// får hit alla kort 
    let förstaKortet ="";
    let andraKortet ="";
    let score = 1;
    let kortArr = [];
let gameBtn = document.querySelector('button');
gameBtn.addEventListener('click', function(){
    for (let i = 0; i < 24; i++) {
        let nyttKort = new Kort;
    
        gameBtn.style.visibility = 'hidden'
        


        nyttKort.element.addEventListener('click', function(event){
            if (nyttKort!=="" && förstaKortet ==="" && event.target !== nyttKort) {
                förstaKortet = nyttKort;
                nyttKort.vändaKort();
            }else if(nyttKort!=="" && andraKortet ==="" && förstaKortet !== nyttKort){
                andraKortet = nyttKort;
                nyttKort.vändaKort();
                jämförKort();
            }else{
                
               alert(" du har redan valt två kort eller valt första kortet eller andra kortet flera gånger")
            };
            
            
        });

        kortArr.push(nyttKort);
        

    };
    fetchImages(kortArr);
    
});

    


function jämförKort(){
        if (förstaKortet.url === andraKortet.url) {
            setTimeout(() => {
                förstaKortet.dubbeletter();// matchade kort försvinner ,men då vi backbilden kommer upp igen ska vi sätta oxå visibility på den oxå. 
            förstaKortet = "";
            }, 1000);  
                
            setTimeout(() => {
                andraKortet.dubbeletter();
                andraKortet = "";
            }, 1000);
            
            let poäng = document.querySelector('.scorep')
            poäng.innerHTML = `${score}`
            score ++;
            if(score == 13){
                gameBtn.style.visibility = 'visible'
                score = 1;
                poäng.innerText = `${score}`;
                location.reload();
            }
            
    }else {
        setTimeout(() => {
            förstaKortet.vänderTillbakaKort();
            förstaKortet = "";
        }, 1000);

        setTimeout(() => {
            andraKortet.vänderTillbakaKort();
            andraKortet = "";
        }, 1000);
       
       
    }
};























