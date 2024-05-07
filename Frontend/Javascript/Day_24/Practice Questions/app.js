let str = "apple";

if (str.length >= 3 && str[0] === "a") {
  console.log("Good");
} else {
  console.log("Not Good");
}

// Practice Question 2
let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}

// switch statement practice question

let day = 7;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Sataurday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You type wrong number");
}
