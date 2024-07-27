// ? Question no 1
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// ? Question no 2

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName[0].toUpperCase() + personName.slice(1).toLowerCase());

// ? Question no 3

console.log(
  'Albert Einstein once said, "A person who never made a mistake never tried anything new."'
);
// ? Question no 4

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);

// ? Question no 5

let nameWithWhitespace: string = "\tJohn Doe\n";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// ? Question no 6

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// ? Question no 7

let favoriteNumber: number = 7;
let favoriteNumberMessage: string = `My favorite number is ${favoriteNumber}.`;
console.log(favoriteNumberMessage);

// ? Question no 8

// Muhammad Sohail
// 2024-07-22
// This program prints a personalized greeting message.

console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Muhammad Sohail
// 2024-07-22
// This program shows different cases of a person's name.

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName[0].toUpperCase() + personName.slice(1).toLowerCase());

// ? Question no 9

let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach((name) => console.log(name));

// ? Question no 10

names.forEach((name) => console.log(`Hello ${name}, how are you today?`));

// ? Question no 11

let favoriteTransportations: string[] = ["Tesla", "BMW", "Honda"];
favoriteTransportations.forEach((vehicle) =>
  console.log(`I would like to own a ${vehicle}.`)
);

// ? Question no 12

let guests: string[] = ["Albert Einstein", "Isaac Newton", "Nikola Tesla"];
guests.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);

// ? Question no 13

console.log(`${guests[2]} can't make it to dinner.`);
guests[2] = "Marie Curie";
guests.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);

// ? Question no 14

console.log("We found a bigger dinner table!");

guests.unshift("Galileo Galilei");
guests.splice(2, 0, "Ada Lovelace");
guests.push("Leonardo da Vinci");

guests.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);

// ? Question no 15

let guest: string[] = [
  "Galileo Galilei",
  "Albert Einstein",
  "Ada Lovelace",
  "Isaac Newton",
  "Marie Curie",
  "Leonardo da Vinci",
];
console.log("I can invite only two people for dinner.");

while (guest.length > 2) {
  let removedGuest = guest.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guest.forEach((guest) =>
  console.log(`Dear ${guest}, you are still invited to dinner.`)
);
guest.pop();
guest.pop();

console.log(guest); // empty

// ? Question no 16

let places: string[] = ["Paris", "Tokyo", "New York", "London", "Sydney"];
console.log(places);

console.log([...places].sort());
console.log(places);

console.log([...places].sort().reverse());
console.log(places);

places.reverse();
console.log(places);

places.reverse();
console.log(places);

places.sort();
console.log(places);

places.sort((a, b) => b.localeCompare(a));
console.log(places);

// ? Question no 17

let guests17: string[] = ["Albert Einstein", "Isaac Newton", "Nikola Tesla"];
console.log(`I am inviting ${guests17.length} people to dinner.`);

// ? Question no 18

let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga"];
console.log(mountains);

// ? Question no 19

{
  let car: { make: string; model: string; year: number } = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
  };
  console.log(car);
}

// ? Question no 20

{
  let numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers[5]); // This will be error that there is no index 5
  console.log(numbers[4]); // Corrected to avoid the error
}
