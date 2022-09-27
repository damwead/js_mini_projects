const str = "2_A3*3#A2";
const str2 = 'eye';

let a = [];
a.

let isPalindrome = (str) => {
  str = str.toLowerCase();
  const regex = /[a-z0-9]/g;

  let clean_str = str.match(regex); // return array
  clean_str = clean_str.join(""); // changes array back to string


  const reversed = clean_str.split("").reverse().join("");

  if(clean_str == reversed) {
    return console.log("true")
  } else {
    return console.log("false")
  }
}


isPalindrome(str);
isPalindrome(str2);