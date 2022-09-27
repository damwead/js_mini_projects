// num should be <= 9999
function convertToRoman(num) {
  num = num.toString().split("").reverse(); // thus we can iterate through it
  let inRoman = []; // result in roman

  const roms = [["IX" ,"V","IV", "I"], ["XC","L", "XL","X"], ["CM","D", "CD","C"] ]

  for(let i = 0; i < num.length; i++) {
    if(i == 3) {
      inRoman.unshift("M".repeat(num[i]))
      return inRoman.join("");
    }
    
    let arr = roms[i]

    if(i == 3) {
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


console.log(convertToRoman(2014));