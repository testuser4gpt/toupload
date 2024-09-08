const events = require("events");

const port = 8000;
const host = "127.0.0.1";

myemitter = new events.EventEmitter();

myemitter.on("Usercreated", (id, name) => {
  console.log(`New user with id ${id} and Name ${name} is created`);
});

myemitter.on("UserUpdated", () => {
  console.log("User Updated");
});

myemitter.on("Usercreated", (id, name) => {
  console.log(`New user with id ${id} and Name ${name} is Deleted`);
});

myemitter.emit("Usercreated", 101, "Kapil"); // The emitter should be under the listener,
// We can also send parameters
myemitter.emit("UserUpdated");

// Notice how in output : First the emitter will emit all it's custom events then it will go to next lines
// A new User has been created
// User Deleted
// User Updated
