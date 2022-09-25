// num should be <= 9999
function convertToRoman(num) {
  num = num.toString(); // thus we can iterate through it
  let inRoman = []; // result in roman
  let last = num.length- 1;
  console.log(last)

  const roms = [["IX" ,"V","IV", "I"], ["XC","L", "XL","X"], ["CM","D", "CD","C"] ]
  // при 29 прога идет с середины 1, и в конец поэтому выходит IIXC

  for(let i = last; i >= 0; i--) {
    let arr = roms[i]

    if(last == 4 && i == 0) {
      inRoman.unshift("M".repeat(num[i]))
    }

    if (num[i] == 4 || num[i] ==  9) {
      if(num[i] == 4) {
        inRoman.unshift(arr[2])
      } else {
        inRoman.unshift(arr[0])
      }
    } else if(num[i] == 5) {
      inRoman.unshift(arr[1])
    } else if (num[i] > 5) {
      inRoman.unshift(arr[1]+arr[3].repeat(num[i]-5))
    } else {
      inRoman.unshift(arr[3].repeat(num[i]))
    }
  }

 return inRoman.join("");
}






console.log(convertToRoman(29));


// if (num[last] == 4 || num[last] ==  9) {
//   if(num[last] == 4) {
//     inRoman.unshift("IV")
//   } else {
//     inRoman.unshift("IX")
//   }
// } else if (num[last] > 5) {
//   inRoman.unshift(`V${"I".repeat(num[last]-5)}`)
// } else {
//   inRoman.unshift(`${"I".repeat(num[last])}`)
// }

// if (num[last-1] == 4 || num[last-1] ==  9) {
//   if(num[last-1] == 4) {
//     inRoman.unshift("XL")
//   } else {
//     inRoman.unshift("XC")
//   }
// } else if (num[last-1] > 5) {
//   inRoman.unshift(`L${"X".repeat(num[last-1]-5)}`)
// } else {
//   inRoman.unshift(`${"X".repeat(num[last-1])}`)
// } 