function pow2() {
    //document.getElementById('inp1').value
    alert(document.getElementById('inp1').value*document.getElementById('inp1').value);
}

function plus(){
    let num1, num2, result;
    num1 = document.getElementById ( "n1").value
    num1 = parseInt(num1);

    num2 =document.getElementById ( "n2").value
    num2 = parseInt(num2);


    result = num1+num2;
    //innerHTML
    document.getElementById("out").innerHTML = result;
}

function minus(){
    let num1, num2, result;
    num1 =document.getElementById ( "n1").value
    num1 = parseInt(num1);

    num2 =document.getElementById ( "n2").value
    num2 = parseInt(num2);

    result = num1-num2;
    document.getElementById("out").innerHTML = result;
}






function displayResult ()
{
    let length = document.getElementById(`length`).value;
    let width = document.getElementById(`width`).value;
    let height = document.getElementById(`height`).value;

    document.getElementById(`result`).innerHTML =  `Площадь равна: ` + calculateSize(length, width, height) + ` м<sup>3</sup>`;
}


function calculateSize(length, width, height)
{
    return  length * width * height;
}



let user;

 user = {
    firstName: "Artur",
    lastName: "Kuzmich",
    age: 24,
    sex: "Male",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(user.fullName());