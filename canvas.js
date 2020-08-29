const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let scale = 20;

(function setupCanvas(){
    const screenWidth = window.innerWidth;
    if(screenWidth < 360){
        scale = 10;

        canvas.height = 200;
        canvas.width = 200;
    }
    else if(screenWidth < 480 && screenWidth >= 360) {
        scale = 15;

        canvas.height = 300;
        canvas.width = 300;
    }
    else if(screenWidth >= 480 && screenWidth < 800) {
        scale = 20;
        
        canvas.height = 400;
        canvas.width = 400;
    }
    else if(screenWidth >= 800) {
        scale = 20;
        
        canvas.height = 600;
        canvas.width = 600;
    }

})();

const height = canvas.height;
const width = canvas.width;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

