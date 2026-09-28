var highest = 0;
var topper = "";

function add() {

    var name = document.getElementById("name").value;
    var cn = Number(document.getElementById("cn").value);
    var at = Number(document.getElementById("at").value);
    var ui = Number(document.getElementById("ui").value);

    var total = cn + at + ui;
    var per = (total / 300) * 100;

    var table = document.getElementById("table");
    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = cn;
    row.insertCell(2).innerHTML = at;
    row.insertCell(3).innerHTML = ui;
    row.insertCell(4).innerHTML = total;
    row.insertCell(5).innerHTML = per.toFixed(2) + "%";

    if (total > highest) {
        highest = total;
        topper = name;
        document.getElementById("topper").innerHTML =
            "Topper: " + topper;
    }
}