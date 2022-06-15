let buttonName = document.querySelectorAll('.btn').length;
let startingTime = 25
console.log(buttonName);


function handleCLick() {
    for (i = 0; i <= buttonName; i++) {
        if (document.querySelectorAll('.btn')[i]) {
            document.querySelectorAll('.btn')[i].addEventListener('click', function () {
                let buttonClicked = this.innerHTML;
                switch (buttonClicked) {
                    case 'START':
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

function startTimer() {
    document.querySelector('.counter').innerHTML = startingTime;
    
}

handleCLick();
startTimer();