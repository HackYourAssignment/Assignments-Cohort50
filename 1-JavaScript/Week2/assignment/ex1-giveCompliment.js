/*  jshint esversion: 6 */
export function giveCompliment(name) {
  const compliments=['great','awesome','amazing','well','exelent','wonderful','good','perfect','very good','fantastic'];
  const random = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[random]}, ${name}!`;
}

function main() {
  // TODO substitute your own name for "HackYourFuture"
  const myName = 'Ruba';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Ruba';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
