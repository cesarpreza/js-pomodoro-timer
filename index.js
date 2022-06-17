let buttonName = document.querySelectorAll('.btn').length;
let startingTime = 5
console.log(buttonName);

document.querySelector('.counter').innerHTML = startingTime;

function handleCLick() {
    for (i = 0; i <= buttonName; i++) {
        if (document.querySelectorAll('.btn')[i]) {
            document.querySelectorAll('.btn')[i].addEventListener('click', function () {
                let buttonClicked = this.innerHTML;
                switch (buttonClicked) {
                    case 'START':
                        startTime();
                        console.log('start was clicked');
                        break;
                    case 'STOP':
                        console.log('stop was clicked');
                        break;
                    case 'RESET':
                        console.log('reset was clicked');
                        break;
                    default:
                        console.log('idk what was clicked');
                }
            })
        }
    }
}

function startTime() {
    let start = setInterval(function () {
        if (startingTime <= 1) {
            document.querySelector('.counter').innerHTML = 'Done!'
            
            clearInterval(start);
        } else {
            document.querySelector('.counter').innerHTML = startingTime - 1;
        }
        startingTime--;
    }, 1000)
}

function stopTime() {
    //code to stop the counter as its running. "Pause"
}


function resetTime() {
    //resets the counter to 5 seconds after the reset button is clicked. 

}


handleCLick();