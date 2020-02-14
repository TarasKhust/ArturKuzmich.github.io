// const root = document.createElement('div');
// root.classList.add('root');

// function generateRounders(count = 1, rounders = []) {

//     if (count < 0) {
//         return rounders;
//     }

//     const tl = document.createElement('div')
//     tl.classList.add('rounder')
//     tl.classList.add('tl');

//     const tr = document.createElement('div')
//     tr.classList.add('rounder')
//     tr.classList.add('tr');

//     const br = document.createElement('div')
//     br.classList.add('rounder')
//     br.classList.add('br');

//     const bl = document.createElement('div')
//     bl.classList.add('rounder')
//     bl.classList.add('bl');

//     rounders.forEach(rounder => {
//         tl.appendChild(rounder.cloneNode(true))
//         tr.appendChild(rounder.cloneNode(true))
//         br.appendChild(rounder.cloneNode(true))
//         bl.appendChild(rounder.cloneNode(true))
//     })

//     return generateRounders(--count, [tl, tr, br, bl]);
// }

// generateRounders(3).forEach(rounder => {
//     root.appendChild(rounder)
// })

// // const root = document.getElementById("wrapper");

// root2.addEventListener("click", e => {
//   root.removeChild(e.target);
//   // root2.innerHTML = "";
// });

// document.getElementById("first").onclick = function (event) {
//   //   // document.getElementById("first").remove();
//   let obj = document.getElementById('first');
//   let posX = obj.offsetTop;
//   let posY = obj.offsetLeft;
//   console.log('x=[' + posX + '] y=[' + posY + ']');



// };

document.getElementById("first").onclick = function (event) {
  if (document.onclick = focus()) return

}