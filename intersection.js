// Write a function, intersection, that takes in two arrays, a,b,
// as arguments.The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
	// todo
	const nums = new Set();
	let arr = [];
	// let obj1 = {};

	// for (let i = 0; i < a.length; i++) {
	//   let aNum = a[i]
	//   if (!(obj1[aNum])){
	//     obj1[aNum] = aNum
	//   }
	// }

	// for (let key in obj1){
	//   if (b.includes(parseInt(key))) arr.push(parseInt(key))
	// }

	for (let num of a) {
		nums.add(num);
	}

	for (let ele of b) {
		if (nums.has(ele)) {
			arr.push(ele);
		}
	}

	return arr;
};
