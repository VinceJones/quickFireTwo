var i;
var j;

var array1 = [1,2,3,4,5,6,7,8];
var array2 = [1,2,3,4,5,6,7,8];
var array3 = [1,2,3,4,5,6,7,8];
var array4 = [1,2,3,4,5,6,7,8];
var array5 = [1,2,3,4,5,6,7,8];
var array6 = [1,2,3,4,5,6,7,8];

var newArray = [];
var masterArray = [array1, array2, array3, array4, array5, array6];

function funWithArrays (array) {
	for (i = 0; i < array.length; i++) {
		for (j = 0; j < array[i].length; j++) {
			array[i][j] = (array[i][j] + 1) * 2;
			newArray.push(" " + array[i][j] );
		} 
		console.log(array[i]);
	}	
	return newArray;
}

funWithArrays(masterArray);

















/*
var masterArray = [];

for (i=0; i<6; i++) {
	masterArray[i] = masterArray.push("array"+i);
}
*/

/*
for (i = 0; i < 8; i++) {
	for (j = 1; j < 10; j++) {
		arrayOne[i] = j;
		arrayTwo[i] = j;
		arrayThree[i] = j;
		arrayFour[i] = j;
		arrayFive[i] = j;
		arraySix[i] = j;
	}
}
console.log(arrayOne);
*/