/*
  sumNumbers(1231) = 7
  sumNumbers(345) = 12
  sumNumbers(712) = 10
*/

// Returns the sum of individual numbers less 
// Than 10 in a single number
function sumNumbers(num) {
    // Base case: if num is less than 10 return num rounded
    if(num < 10) return Math.floor(num);
    
    // Else return the right-most number and recursively
    // Call the function with the number divided by 10
    return Math.floor(num % 10) + sumNumbers(num/10);
}
  
console.log(sumNumbers(12312));