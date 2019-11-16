//const arr = Array(100).fill('');

//function randomNum(){
    //return Math.round( Math.random() * 255 );
//}


   // function render (selector, list){
       // const app = document.querySelector(selector);

       // const html = arr.map(e => `
      //  <div
       ///=     style="
         //       width: 50px;
          //      height: 50px;
         //      background: rgb(
          ///         ${randomNum()},
          ///         ${randomNum()},
           //         ${randomNum()}
                  //  )
      //  "
       // ></div>
       // `).join('');

       // app.innerHTML = html;


   // }
//render('#app', arr);




    //function example(){
    //    let variable = 123;

    //    return function() {
    //        //console.log(variable)
    //    }
   // }

    //let res = example();
    //console.dir(res);


//const constr = q => b => a + b;
//const sumWith2 = constr(2);
//console.dir(sumWith2)

//const sumWith5 = constr(5);
//console.dir(sumWith5)
//sum(2)(3)//5


//const fraseConstructor = frase => name => `${frase}, => ${name}!`


//const sayHello = fraseConstructor('Hello');
//const satGoodbye = fraseConstructor('Goodbye');

//console.log(sayHello('Ivan'))
//console.log(satGoodbye ('Petro'))


//function circleSqueareConstructor(){

  //  const PI = 3.14;

//return radius => PI * R * R;

//}

//const circleSqueare = circleSqueareConstructor();



const random = () =>  Math.round(Math.random() * 255);


let timer = setInterval(render, 500);


function render(selector = '#app') {
    let html = '';

    for(let i = 0; i < 500; i++){
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

    const element = document.querySelector(selector);

    if (element){
        element.innerHTML = html;

    }
        else {
            console.log('no element')
            clearInterval(timer);
        }
}

 
