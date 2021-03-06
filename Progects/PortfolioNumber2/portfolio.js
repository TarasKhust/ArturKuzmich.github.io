const root = document.createElement('div');
root.classList.add('root');

function generateRounders(count = 1, rounders = []) {
    if (count < 0) {
        return rounders;
    }

    const tl = document.createElement('div')



    tl.classList.add('rounder')
    tl.classList.add('tl');

    const tr = document.createElement('div')
    tr.classList.add('rounder')
    tr.classList.add('tr');

    const br = document.createElement('div')
    br.classList.add('rounder')
    br.classList.add('br');

    const bl = document.createElement('div')
    bl.classList.add('rounder')
    bl.classList.add('bl');

    // rounders.forEach(rounder => {
    //     tl.appendChild(rounder.cloneNode(true))
    //     tr.appendChild(rounder.cloneNode(true))
    //     br.appendChild(rounder.cloneNode(true))
    //     bl.appendChild(rounder.cloneNode(true))
    // })

    return generateRounders(--count, [tl, tr, br, bl]);
}

generateRounders(3).forEach(rounder => {
    root.appendChild(rounder)
})

document.body.appendChild(root)