//1

arrA = new Array(+prompt('Could you tell me about length of the Array?', 5));

arrB = [];

//2, 3

toLabe1:
for(i = 0; i < arrA.length; i++) {
  arrA[i] = Math.floor(Math.random()*10);

  for(j = 2; j < arrA[i]; j++) {
    if(arrA[i] % j == 0) {
      continue toLabe1;
    }
  }
  arrB[i] = arrA[i]; 
}

console.log(arrA);
arrB = arrB.filter(Boolean);
console.log(arrB);
//4
minValue = maxValue = arrB[0];

for(i = 0; i < arrB.length; i++ ){
  if(arrB[i] < minValue){
    minValue = arrB[i];
  }
  else if (arrB[i] > maxValue){
    maxValue = arrB[i];
  }
}

console.log('min value is ${minValue}');
console.log('max value is ${maxValue}');