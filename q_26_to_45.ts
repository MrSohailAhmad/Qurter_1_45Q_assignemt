// ? Question no 26

let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// ? Question no 27

let favorite_fruits: string[] = ["apple", "banana", "mango"];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}
if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}
if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}

// ? Question no 28

let usernames: string[] = ["admin", "john", "jane", "doe", "smith"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});

// ? Question no 29

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  usernames.forEach((username) => {
    if (username == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  });
}

// ? Question no 30

let current_users: string[] = ["john", "jane", "doe", "smith", "admin"];
let new_users: string[] = ["jane", "mark", "jack", "admin", "steve"];

new_users.forEach((new_user) => {
  if (
    current_users
      .map((user) => user.toLowerCase())
      .includes(new_user.toLowerCase())
  ) {
    console.log(
      `The username ${new_user} is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username ${new_user} is available.`);
  }
});

// ? Question no 31

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  if (number === 1) {
    console.log("1st");
  } else if (number === 2) {
    console.log("2nd");
  } else if (number === 3) {
    console.log("3rd");
  } else {
    console.log(`${number}th`);
  }
});

// ? Question no 32

const ordinal: string[] = [
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
];

numbers.forEach((number) => {
  console.log(`${number}${ordinal[(number % 10) - 1]}`);
});

// ? Question no 33
let favoritePizzas: string[] = ["Margherita", "Pepperoni", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

// ? Question no 34

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// ? Question 35

function make_shirt(size: string = "L", message: string = "I love TypeScript") {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}" printed on it.`
  );
}
make_shirt("M", "I love coding!");

// ? Question no 36

// ? Question no 37

//  i use the upper function here

make_shirt();
make_shirt("M");
make_shirt("S", "JavaScript is awesome!");

// ? Question no 38

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// ? Question no 38

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New York", "USA"));

// ? Question no 39

function make_album(artist: string, title: string, tracks?: number): object {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("Taylor Swift", "Evermore"));
console.log(make_album("Adele", "30", 12));
console.log(make_album("Ed Sheeran", "Equals"));

// ? Question no 40

let magicians: string[] = ["David Blaine", "David Copperfield", "Criss Angel"];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);

// ? Question no 41

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

let greatMagicians = make_great([...magicians]);
show_magicians(greatMagicians);

// ? Question no 42

let unchangedMagicians = [...magicians];

show_magicians(unchangedMagicians);
show_magicians(greatMagicians);

// ? Question no 43

function make_sandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:");
  for (let item of items) {
    console.log(` - ${item}`);
  }
}

make_sandwich("Lettuce", "Tomato", "Bacon");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");

// ? Question no 44

function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car = { manufacturer, model };
  for (let [key, value] of options) {
    car[key] = value;
  }
  return car;
}

let car = make_car("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
console.log(car);
