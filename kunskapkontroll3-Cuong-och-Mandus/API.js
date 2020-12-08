
// exportera från Api till memorylogic
export function fetchImages(kortArr){


// Api: Key och url från flickr
const key = 'c223feb40f33f18a88f943ee78719712';
const tema = 'dragonball';
const url = `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=${tema}&format=json&nojsoncallback=1&page=2&page=1`;


fetch(url) .then(function(response){
    return response.json()
    
}).then(function(data){
    

    // loopa genom bilderna och sätta dom i en ny array
    let sportsArr = [];
    for (let i = 5; i < 61; i+=5) { 
        sportsArr.push(getImageUrl(data.photos.photo[i]));
        sportsArr.push(getImageUrl(data.photos.photo[i]));
    }
    
    for (let i = 0; i < kortArr.length ; i++) {
        kortArr[i].url = sportsArr[i];
    }
    
    //errorhanteringen
    if(response.status >= 200 && response.status < 300){
        return response.json();
    }else{
        throw 'Något gick fel';
    }
    
}).catch (function(error){
    console.log(error)
})
}

 // här skapa vi ihop bild urlen
function getImageUrl(photoObject) {

    let photo = photoObject;
    let size = 'q';

    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    return imgUrl;
};


