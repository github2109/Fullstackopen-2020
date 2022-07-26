const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

if (process.argv.length == 4) {
  console.log(
    "Please provide the number as an argument: node mongo.js <password> <name> <number>"
  );
  process.exit(1);
}
const password = process.argv[2];

const url = `mongodb+srv://anhhiep2109:${password}@cluster0.3n8ka.mongodb.net/MyFirstDatabase?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);
if (process.argv.length === 3) {
  mongoose
    .connect(url)
    .then((result) => {
      Person.find({}).then((result) => {
        console.log("phonebook:");
        result.forEach((person) => {
          console.log(`${person.name} ${person.number}`);
        });
        mongoose.connection.close();
        process.exit(1);
      });
    })
    .catch((err) => console.log(err));
}

const name = process.argv[3];
const number = process.argv[4];

mongoose
  .connect(url)
  .then((result) => {
    const person = new Person({
      name: name,
      number: number,
    });
    return person.save();
  })
  .then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
