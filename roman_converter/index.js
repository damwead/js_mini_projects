// num should be <= 9999
function convertToRoman(num) {
  num = num.toString();
  let roman = [];
  let last = num.length- 1;

  const roms = [["IX" ,"V","IV", "I"], ["XC","L", "XL","X"], ["CM","D", "CD","C"] ]

  for(let i = last; i >= 0; i--) {
    let arr = roms[i]

    if(last == 4 && i == 0) {
      roman.unshift("M".repeat(num[i]))
    }

    if (num[i] == 4 || num[i] ==  9) {
      if(num[i] == 4) {
        roman.push(arr[2])
      } else {
        roman.push(arr[0])
      }
    } else if(num[i] == 5) {
      roman.push(arr[1])
    } else if (num[i] > 5) {
      roman.push(arr[1]+arr[3].repeat(num[i]-5))
    } else {
      roman.push(arr[3].repeat(num[i]))
    }
  }

 return roman.join("");
}






console.log(convertToRoman(29));


// if (num[last] == 4 || num[last] ==  9) {
//   if(num[last] == 4) {
//     roman.unshift("IV")
//   } else {
//     roman.unshift("IX")
//   }
// } else if (num[last] > 5) {
//   roman.unshift(`V${"I".repeat(num[last]-5)}`)
// } else {
//   roman.unshift(`${"I".repeat(num[last])}`)
// }

// if (num[last-1] == 4 || num[last-1] ==  9) {
//   if(num[last-1] == 4) {
//     roman.unshift("XL")
//   } else {
//     roman.unshift("XC")
//   }
// } else if (num[last-1] > 5) {
//   roman.unshift(`L${"X".repeat(num[last-1]-5)}`)
// } else {
//   roman.unshift(`${"X".repeat(num[last-1])}`)
// } 