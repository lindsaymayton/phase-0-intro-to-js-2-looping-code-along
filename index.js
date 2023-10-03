for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        debugger; 
    }

    return gifts;
}

wrapGifts(gifts);

let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}
function writeCards(names, occasion) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const occasion = "birthday";
  
  const messages = writeCards(names, occasion);
  console.log(messages);