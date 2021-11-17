
const img = document.getElementById ('img');
const buttons=document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight= (event) => {    
    stopAutomatic();
    turnOn[event.target.id]();  
    

}


function nextIndex() {
    return colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

    /*ternário:
    //colorIndex = colorIndex <2 ? ++colorIndex: 0 (não é obrigado a usar as chaves {} com arrow function)

    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}*/

const changeColor = () => {
    const colors = ['green', 'yellow', 'red']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();

}

const stopAutomatic = () => {
    clearInterval (intervalId);
} 
//red, yellow, green e auto são os id de cada botão criado no documento HTML
const turnOn = {
    'red': ()=> img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': ()=> img.src = 'img/verde.png',
    'auto': () => intervalId = setInterval(changeColor, 2000)
}

buttons.addEventListener('click', trafficLight);