window.addEventListener("load", function() {
    var dividend, divisor, num_decimals;
    var button_calculate = document.getElementById('button_calculate');
    var content = document.getElementById('content');

    button_calculate.addEventListener('click', () => {
        dividend = document.getElementById('dividend').value;
        divisor = document.getElementById('divisor').value;
        num_decimals = document.getElementById('num_decimals').value;
        var np = new NumberPair(dividend, divisor);
        content.innerHTML = np.longDivision(num_decimals);
        console.log(np.longDivision())
    })


})
