const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased (){
//   return tutorials.map((word) => {
//     const capitalizedFirst = word.charAt(0).toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
//   })
// }

function titleCased (){
  let newArray = tutorials.map(array => {
  let splitArray = array.split(' ')
  let capitilizedLetter = splitArray.map(string => string.charAt(0).toUpperCase() + string.slice(1))
  return capitilizedLetter.join(' ')
  })
  return newArray
}




// } => tutorials.map((string) string.charAt(0).toUpperCase())

