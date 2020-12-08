// hämta element 
let spelBordet = document.querySelector('.gameboard');


// export 
// skapa  constructor mall 
export function Kort (url){
    this.backSide = false;
    this.img = url;
    this.element = document.createElement('img');
    this.element.classList.add('card')
    this.element.setAttribute('src', './img/back2.jfif');
    this.element.style.order = Math.ceil(Math.random()*800);
    spelBordet.appendChild(this.element);
   
}

// skapa prototype 
Kort.prototype.vändaKort = function(){
    this.backSide = true;
    this.element.setAttribute('src', `${this.url}`);
    
}

Kort.prototype.vänderTillbakaKort = function(){
    this.backSide = false;
    this.element.setAttribute('src', './img/back2.jfif');
}

Kort.prototype.dubbeletter = function(){
    this.element.style.visibility = 'hidden'

}
