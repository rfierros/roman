function myFunction() {
  var num,
      text;
  num = document.getElementById("numberdec").value;
  if (isNaN(num) || num < 1 || num >= 4000) {
    text = "Number out of range. The number must be between 1 and 3999.";
  }
  else {
    text = toRomanNumber(num);
  }
  document.getElementById("test").innerHTML = text;
}

function toRomanNumber(numDec) {
  var parser = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
      numRoman = '',
      i;
  for ( i in parser ) {
    while ( numDec >= parser[i] ) {
      numRoman = numRoman + i;
      numDec = numDec - parser[i];
    }
  }
  return numRoman;
}
