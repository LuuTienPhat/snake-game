const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let scale = 20;

(function setupCanvas(){
    const screenWidth = window.innerWidth;
    if(window.innerWidth < 480 ) {
        scale = 15;

        canvas.height = 300;
        canvas.width = 300;
    }
    else if(screenWidth >= 480) {
        scale = 20;
        
        canvas.height = 400;
        canvas.width = 400;
    }

})();

const height = canvas.height;
const width = canvas.width;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

