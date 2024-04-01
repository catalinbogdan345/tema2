const listOfColors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];
//                        0          1           2         3          4

const nextColor = document.querySelector('.next-color');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');


const pressed = document.querySelector('.number');

const addOne = () => {
    pressed.innerHTML = parseInt(pressed.innerText) + 1;
};

nextColor.addEventListener('click', addOne);


// buton resetare

const resetButton = document.querySelector('.reseter');

const resetFunction = () =>{
    colorSwitcherContainer.style.backgroundColor = listOfColors[0];
    pressed.innerText = 0;
    currentColor.innerText = listOfColors[0];
    currentColor.style.color = `${listOfColors[index]}`;
};
resetButton.addEventListener('click', resetFunction);

// pro
    // previous
const previousButton = document.querySelector('.previous-color');

const changePrevious = () =>{
    index--;
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = `${listOfColors[index]}`;
};
previousButton.addEventListener('click', changePrevious);


    // next

    let index = 0;

const switchColor = () => {
    index++;

    if (index === 5) {
        index = 0;
    }

    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = `${listOfColors[index]}`;
};

nextColor.addEventListener('click', switchColor);
