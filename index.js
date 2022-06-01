let buttonName = document.querySelectorAll('.btn').length;
console.log(buttonName);


function handleCLick() {
    for (i = 0; i <= buttonName; i++) {
        if (document.querySelectorAll('.btn')[i]) {
            document.querySelectorAll('.btn')[i].addEventListener('click', function () {
                console.log('clicked')
            })
        }
    }
}

handleCLick();