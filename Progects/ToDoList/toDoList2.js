const list = document.querySelector('ul');

        list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       const div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('toDoEl').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Add your item...!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    const span = document.createElement('SPAN');
    const txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}