
var numberDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keydown",function(){
    console.log(event.key);
    var keyPress = event.key;
    playSounds(keyPress);
    buttonAnimation(keyPress);
})

for (var i = 0; i< numberDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        console.log(this.innerHTML);
        var keyClick = this.innerHTML;
        playSounds(keyClick);
        buttonAnimation(keyClick);
    }); 
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 200)
        
}

function playSounds(key){
    switch (key) {
        case "w":
            var a_w = new Audio('sounds/tom-1-w.mp3');
            a_w.play();
            break;
        case "a":
            var a_a = new Audio('sounds/tom-2-a.mp3');
            a_a.play();
            break;
        case "s":
            var a_s = new Audio('sounds/tom-3-s.mp3');
            a_s.play();
            break;
        case "d":
            var a_d = new Audio('sounds/tom-4-d.mp3');
            a_d.play();
            break;
        case "j":
            var a_j = new Audio('sounds/snare-j.mp3');
            a_j.play();
            break;
        case "k":
            var a_k = new Audio('sounds/crash-k.mp3');
            a_k.play();
            break;
        case "l":
            var a_l = new Audio('sounds/kick-bass-l.mp3');
            a_l.play();
            break;
        default:
            break;
    }
}