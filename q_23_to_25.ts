// ? Question no 23

let alien_color: string = "green";

if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

alien_color = "red";

if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// ? Question no 24

if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

alien_color = "yellow";

if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

// ? Question no 25

if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else {
  console.log("You just earned 15 points!");
}

alien_color = "yellow";

if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else {
  console.log("You just earned 15 points!");
}

alien_color = "red";

if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else {
  console.log("You just earned 15 points!");
}
