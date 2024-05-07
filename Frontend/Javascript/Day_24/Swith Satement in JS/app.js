// Switch Statement in JS
// Used when we have some fixed values that we need to compare to

// Example 1
let color = "green";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Broken Light");
}

// Example 2

let switches = "television";

switch (switches) {
  case "fan":
    console.log("Fan is on");
    break;
  case "light":
    console.log("Light is on");
    break;
  case "lamp":
    console.log("Lamp is on");
    break;
  case "television":
    console.log("Tv is on");
    break;
  default:
    console.log("You Press wrong switch");
}
