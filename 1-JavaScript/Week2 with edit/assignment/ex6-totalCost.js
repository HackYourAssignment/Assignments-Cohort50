const cartForParty = {
  cocolate: 5,
  chips: 2,
  cake: 4,
  juis: 6,
  nuts: 5
};
function calculateTotalPrice(cartForParty) {
  let amount = 0;
  for (let key in cartForParty) {
    amount += cartForParty[key];
  }
  return `Total: €${amount.toFixed(2)}`;
}
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(actual === expected);
  console.log(calculateTotalPrice(cartForParty));
}
function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €22';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
}
function test() {
  test1();
  test2();
}
test();