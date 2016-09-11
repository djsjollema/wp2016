window.addEventListener("load", function() {
    var input_min, input_max;
    var button_calculate = document.getElementById("button_calculate")
    var divisorTable = [];
    var table = document.createElement("table");
    var content_table = document.getElementById("content_table");
    content_table.appendChild(table);

    button_calculate.addEventListener("click", function() {
        divisorTable = [];
        input_min = document.getElementById("input_min").value;
        input_max = document.getElementById("input_max").value;
        for (let i = input_min; i < input_max; i++) {
            let array = [];
            i = parseInt(i);
            array[0] = i;
            array[1] = i.divisors();
            array[2] = i.divisors().length;
            divisorTable.push(array);
        }
        content_table.removeChild(table);

        table = document.createElement("table");
        table.border = 1;
        table.cellPadding = 4;
        table.cellSpacing = 4;

        divisorTable.sort(function(a, b) {
            return b[2] - a[2];
        });

        for (let i = 0; i < divisorTable.length; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            cell1.innerHTML = divisorTable[i][0];
            cell2.innerHTML = divisorTable[i][1];
            cell3.innerHTML = divisorTable[i][2];
        }
        content_table.appendChild(table);
    })
})
