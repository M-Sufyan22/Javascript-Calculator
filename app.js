function getnums(val) {
    var x = document.getElementById("result").value;
    if (x == 0) {
        document.getElementById("result").value = val;
    } else {
        document.getElementById("result").value += val;
    }
}

function solve() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}


function clearall() {
    document.getElementById("result").value = "0";
}

function deleteone() {
    var x = document.getElementById("result").value;
    if (x != 0) {
        var z = document.getElementById("result").value.slice(0, -1);
        document.getElementById("result").value = z;
    }

}
