const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');
const victim = document.querySelector('#victim');
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const width = document.querySelector('#width');
const height = document.querySelector('#height')
const coordStep = document.querySelector('#step');



add.addEventListener('click', e => {
    victim.classList.add('victim-open');
});

remove.addEventListener('click', e => {
    victim.classList.remove('victim-open');
});

toggle.addEventListener('click', e => {
    victim.classList.toggle('victim-open');
});

x.addEventListener('input', e => {
    const coord = parseInt(e.target.value);
    victim.style.left = coord + 'px';
});

y.addEventListener('input', e => {
    const coord = parseInt(e.target.value);
    victim.style.top = coord + 'px';
});


width.addEventListener('input', e => {
    const size = e.target.value;
    victim.style.width = size + 'px';
})

height.addEventListener('input', e => {
    const size = e.target.value;
    victim.style.height = size + 'px';
});



document.addEventListener('keypress', e => {

     const rect = victim.getBoundingClientRect();
     const step = parseInt(coordStep.value);


    switch (e.keyCode) {
        case 108:
            victim.style.left = (rect.left - step) + 'px';
            break;
        case 114:
                victim.style.left = (rect.left + step) + 'px';
            break;
        case 117:
                victim.style.top = (rect.top - step) + 'px';
            break;
        case 100:
                victim.style.top = (rect.top + step) + 'px';
            break;


    }
});


let offsetX;
let offsetY;
function mousemove (e) {
    const x = e.pageX;
    const y = e.pageY;
    

    victim.style.left = (x - offsetX) + 'px';
    victim.style.top = (y - offsetY) + 'px';
}

victim.addEventListener('mousedown', (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    victim.classList.toggle('grabbing');
    document.addEventListener('mousemove', mousemove);
});

victim.addEventListener('mouseup', () => {
    victim.classList.toggle('grabbing');
    document.removeEventListener('mousemove', mousemove)
});


let colorArray = ["red", "green", "black"];
let i = 0;
function changeColor() {
    victim.style.background = colorArray[i];
    i ++;
    if (i > colorArray.length - 1){
        i = 0;
    }
}
    