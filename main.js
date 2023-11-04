function DeleteMe(){
    document.getElementById("MyResult").value = ""
}

function calculator(NewValue){
    document.getElementById("MyResult").value += NewValue;

}

function Answer(){
    var a = document.getElementById("MyResult").value ;
    var b = eval(a);
    document.getElementById("MyResult"). value = b
}


function Cleanme() {
    var inputElement = document.getElementById("MyResult");
    var currentValue = inputElement.value;

    if (currentValue.length > 0) {
        inputElement.value = currentValue.slice(0, -1);
    }
}
