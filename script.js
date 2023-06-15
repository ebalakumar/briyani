// Get the input values from the form and perform calculations
function calculate() {
    // Get input values
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
  
    // Perform calculations
    var sum = number1 + number2;
    var difference = number1 - number2;
    var product = number1 * number2;
    var quotient = number1 / number2;
  
    // Display the results
    document.getElementById('sum').textContent = 'Sum: ' + sum;
    document.getElementById('difference').textContent = 'Difference: ' + difference;
    document.getElementById('product').textContent = 'Product: ' + product;
    document.getElementById('quotient').textContent = 'Quotient: ' + quotient;
  }
  