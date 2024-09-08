// let and var, Mostly we use let instead of var, The difference is
// Var can be initialized with same name again, and it's hoisted at top

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // can be initialized without mentioning var or let
let accountState;

accountState = 234;
console.log(accountState);

// accountId = 2 // not allowed, already defined as constant

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// Initializing multiple variables

let new1 = 45,
  new2 = "hello", // uses comma
  new4 = 3;
console.table([new1, new2, new4]);

// can declare variable using $ and _

var _ = "wow";
let $ = "new sign";
console.log(_, $);
