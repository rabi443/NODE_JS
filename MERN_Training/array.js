const arr1 = [1,2,3,4]; // This is an array of numbers
console.log(arr1); // This will access the third element of the array, which is 3

arr1.push(5); // This will add 5 to the end of the array
console.log("After push:", arr1); // This will print the updated array

arr1.pop(); // This will remove the last element of the array   
console.log("After pop:", arr1); // This will print the array after removing the last element

arr1.shift(); // This will remove the first element of the array
console.log("After shift:", arr1); // This will print the array after removing the first element

arr1.unshift(0); // This will add 0 to the beginning of the array
console.log("After unshift:", arr1); // This will print the array after adding 0 to the beginning

arr1.splice(1, 2); // This will remove 2 elements starting from index 1
console.log("After splice:", arr1); // This will print the array after removing elements from index 1

arr1.reverse(); // This will reverse the order of the elements in the array
console.log("After reverse:", arr1); // This will print the reversed array

arr1.sort((a, b) => a - b); // This will sort the array in ascending order
console.log("After sort:", arr1); // This will print the sorted array

// arr1 = [1,2,3,4]; // This will not work because arr1 is a constant
// arr1 = [5,6,7,8]; // This will not work because arr1 is a constant
// arr1 = []; // This will not work because arr1 is a constant  

console.log("Final array:", arr1); // This will print the final state of the array