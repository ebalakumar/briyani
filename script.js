// Get the input value from the form and calculate the steps to make a food dish
function calculate() {
  // Get input value
  var meatWeight = parseInt(document.getElementById('meatWeight').value);

  // Calculate steps
  var riceQuantity = meatWeight;
  var waterQuantity = meatWeight * 800;
  var spiceClove = meatWeight * 3;
  var spiceCardamom = meatWeight * 3;
  var spiceCinnamon = meatWeight * 3;

  // Display the steps
  document.getElementById('spiceClovePrepare').textContent =  spiceClove + ' numbers. ';
  document.getElementById('spiceCardamomPrepare').textContent =  spiceCardamom + ' numbers. ';
  document.getElementById('spiceCinnamonPrepare').textContent =  spiceCinnamon + ' inches. ';
  document.getElementById('riceStep').textContent = 'You need ' + riceQuantity + ' kg of rice.';
  document.getElementById('waterStep').textContent = 'You need to add ' + waterQuantity + ' ml of water.';
}
