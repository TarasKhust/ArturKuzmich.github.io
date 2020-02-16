const arr = Array(100).fill('');

function randomNum() {
   return Math.round(Math.random() * 255);
}


function render(selector, list) {
   const app = document.querySelector(selector);

   const html = arr.map(e => `
       <div
       /=     style="
               width: 50px;
               height: 50px;
              background: rgb(
          /         ${randomNum()},
          /         ${randomNum()},
                   ${randomNum()}
                   )
       "
       ></div>
       `).join('');

   app.innerHTML = html;


}
render('#app', arr);




function example() {
   let variable = 123;

   return function () {
      //console.log(variable)
   }
}

let res = example();
console.dir(res);


const constr = q => b => a + b;
const sumWith2 = constr(2);
console.dir(sumWith2)

const sumWith5 = constr(5);
console.dir(sumWith5)
sum(2)(3) //5


const fraseConstructor = frase => name => `${frase}, => ${name}!`


const sayHello = fraseConstructor('Hello');
const satGoodbye = fraseConstructor('Goodbye');

console.log(sayHello('Ivan'))
console.log(satGoodbye('Petro'))


function circleSqueareConstructor() {

   const PI = 3.14;

   return radius => PI * R * R;

}

const circleSqueare = circleSqueareConstructor();



/const random = () =>  Math.round(Math.random() * 255);


let timer = setInterval(render, 500);


function render(selector = '#app') {
   let html = '';

   for (let i = 0; i < 500; i++) {
      html += `
       <div
           style="
           width: 50px;
           height: 50px;
           background: rgb(${random()}, ${random()}, ${random()});
        "
       ></div>

       `;
   }
   /
   const element = document.querySelector(selector);

   if (element) {
      element.innerHTML = html;

   } else {
      console.log('no element')
      clearInterval(timer);
   }
}


function Example() {
   this.field1 = 123
   this.field2 = "fsdf"

   this.log = function () {
      console.log(this)
   }
   /}

   const ex1 = new Example();

   console.log(ex1)

   картинки двигаются с начала до конца экрана

   function Car(selector, speed, distanse) {
      this.carWidth = 100;
      this.car = document.querySelector(selector);
      this.car.style.width = `${this.carWidth}px`;

      this.speed = speed;
      this.distanse = distanse;
      this.isRun = null;
      this.run = function () {

         if (this.isRun) return;


         this.isRun = setInterval(() => {
            this.distanse += this.speed;


            const maxWidth = window.innerWidth;
            const currentWidth = this.distanse + this.carWidth;

            if (currentWidth >= maxWidth) {
               this.stop()
               this.distanse = maxWidth - this.carWidth;
            }

            this.move();
         }, 1000);
      }
      this.accelerate = function () {
         this.speed *= 2;
      }
      this.stop = function () {
         clearInterval(this.isRun);
         this.isRun = null;
      }
      this.move = function () {
         this.car.style.left = `${this.distanse}px`;
      }
   }

   const car1 = new Car('#car1', 10, 0);
   const car2 = new Car('#car2', 5, 20);