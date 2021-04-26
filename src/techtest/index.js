// function Check(s1, s2) {
//   if (typeof s1 == "string") {
//     if (typeof s2 == "string") {
//       var charArray1 = [];
//       for (i = 0; i < s1.length; i++) {
//         var c = s1[i];
//         charArray1.push(c);
//       }
//       var charArray2 = [];
//       for (i = 0; i < s2.length; i++) {
//         var c = s2[i];
//         charArray2.push(c);
//       }
//       charArray1.sort();
//       charArray2.sort();
//       if (
//         charArray1[0] == charArray2[0] &&
//         charArray1[1] == charArray2[1] &&
//         charArray1[2] == charArray2[2] &&
//         charArray1[3] == charArray2[3]
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       console.log("Invalid Input");
//     }
//   } else {
//     console.log("Invalid Input");
//   }
// }
// console.log(Check("bobo", "obob"), "true");
// console.log(Check("bobo", "boo4b"), "false");
// console.log(Check("dog", "god"), "true");
// // This test case fails
// console.log(Check("gabety", "gabmen"), "false");

// const Check = () => {
//   const s1 = "";
//   const s2 = "";
//   const charArray1 = [];
//   for (i = 0; i < s1.length; i++) {
//     const c = s1[i];
//     charArray1.push(c);
//   }
//   const charArray2 = [];
//   for (i = 0; i < s2.length; i++) {
//     const c = s2[i];
//     charArray2.push(c);
//   }
//   charArray1.sort();
//   charArray2.sort();
//   if (charArray1 == charArray2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(Check("bobo", "obob"), "true");
// console.log(Check("bobo", "boo4b"), "false");
// console.log(Check("dog", "god"), "true");
// // This test case fails
// console.log(Check("gabety", "gabmen"), "false");

// - How do you find the largest and smallest number in an unsorted integer array?

const array1 = [1, 5, 8, 9, 22];
const findLargest = Math.max(...array1);
const findSmallest = Math.min(...array1);

console.log(findLargest);
console.log(findSmallest);

// - How do you find duplicates in an array if it contains multiple cases

const findDuplicates = (arr) => {
  const sortedArr = arr.sort();
  let results = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
      results.push(sortedArr[i]);
    }
  }
  return results;
};
const arrDupe = [7, 3, 3, 1, 1];
console.log(findDuplicates(arrDupe));

// - How do you reverse the words in a sequence
const arr = ["hey", "tim", "hows", "the", "leg"];
const reverse = arr.reverse();
console.log(reverse);

// - How do you check if a string contains only digits
const isNumber = (val) => {
  const sortNum = /^\d+$/.test(val);
  return sortNum;
};
const isNumArr = ["1", "hello"];
console.log(isNumber(isNumArr));

// - How do you swap two numbers without using a third variable?

// - How do you find all pairs of an integer array whose sum is equal to a given number?
const intArr = [2, 4, 5, 8, 12, 5, 10, 10];
const givenNumb = 20;

const findEqualPairs = (arr, givenNumb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let i2 = i + 1; i2 < arr.length; i2++)
      if (arr[i] + arr[i2] == givenNumb) {
        result.push(arr[i]);
        result.push(arr[i2]);
      }
  }
  return result;
};

console.log(findEqualPairs(intArr, givenNumb));

// - How do you print the first non repeated character from a string?
const repeatStr = "bbbabygotback";
const findFirstNonRepeat = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      return;
    } else {
      result.push(str[i]);
    }
  }
  return result;
};
console.log(findFirstNonRepeat(repeatStr));
