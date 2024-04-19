import "./App.css";
import UserCard from "./components/UserCard";

// const person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal",
// };
// ES5 pattern
// const name = person.name;
// const age = person.age;
// const favoriteMusic = person.favoriteMusic;

// ES6 pattern
// const { name, age, favoriteMusic } = person;

// console.log(`Hello, ${person.name}.`);
// console.log(`You are ${person.age} years old.`);
// console.log(`Your favorite music is ${person.favoriteMusic}.`);

// let { name, age, favoriteMusic, country = "Spain" } = person;
// console.log(person);
// const dbUser = {
//   username: "bob1234",
//   password: "somehashedvalue",
// };

// const { username: dbUsername, password: dbPassword } = dbUser;

// const loggingUser = {
//   username: "bob123",
//   password: "somehashedvalue",
// };

// const { username, password } = loggingUser;

// console.log(dbUsername, dbPassword);

// const person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal",
//   address: {
//     street: "Super Cool St",
//     number: 123,
//     city: "Miami",
//     hobbies: [1, 2, 3],
//   },
// };

// // ES6
// const {
//   name,
//   address: {
//     number,
//     city,
//     hobbies: [a, b, c],
//   },
// } = person;
// console.log(number, city, a, b, c);

// // ES5
// console.log(person.address.number);

// const campuses = ["madrid", "barcelona", "miami"];
// const [a, b, c] = campuses;
// console.log(a, b, c);

// const [_, second] = campuses;

// const [campus1, campus2, campus3, campus4] = campuses;
// console.log(campus4);

// const europeanCampuses = [
//   ["madrid", "es"],
//   ["barcelona", "es"],
//   ["berlin", "de"],
//   ["paris", "fr"],
//   ["amsterdam", "nl"],
//   [
//     "lisbon",
//     "pt",
//     [
//       "a",
//       "b",
//       {
//         c1: "1",
//         c2: "2",
//       },
//     ],
//   ],
// ];
// const [a, b, c, d, e, [f1, f2, [f31, f32, { c1, c2 }]]] = europeanCampuses;
// console.log(c1, c2);

function App() {
  // const without = useState(0);
  // const count = without[0];
  // const setCount = without[1];
  // console.log(without);
  // const [count, setCount] = useState(0);
  const user = {
    username: "Bob",
    age: 55,
    address: {
      city: "Berlin",
    },
  };
  // console.log({ ...user });

  // const reptiles = ["snake", "lizard", "alligator"];
  // const mammals = ["puppy", "kitten", "bunny"];
  // const animals = [...reptiles, ...mammals];
  // console.log(animals);

  // function myFunction(arg1, arg2) {
  //   console.log(arg1);
  //   console.log(arg2);
  // }
  // myFunction("first argument", "second argument", "third argument");

  // function add() {
  //   let sum = 0;
  //   console.log(arguments);
  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }
  //   return sum;
  // }

  // add(); // 0
  // add(1); // 1
  // add(1, 2, 5, 8); // 16

  // function add() {
  //   return [...arguments].reduce((sum, next) => sum + next);
  // }

  // add(1, 2, 3);

  // function add(...numbers) {
  //   // numbers represents the arguments passed when function gets invoked
  //   let sum = 0;
  //   for (let oneNumber of numbers) {
  //     sum += oneNumber;
  //   }
  //   return sum;
  // }

  // add(1); // 1
  // add(1, 2); // 3
  // add(1, 2, 5, 8); // 16

  // function showMovie(title, year, ...actors) {
  //   console.log(`${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`);
  // }

  // showMovie('Titanic', '1997', 'Leonardo Di Caprio', 'Kate Winslet');

  const customer = {
    name: {
      firstName: "ivan",
      lastName: "zoro",
    },
    age: 32,
    preferences: [
      {
        tech: ["cameras", "smartwatches"],
        books: ["science fiction", "coding"],
      },
    ],
  };

  const {
    name: { firstName, lastName },
    age,
    preferences: [
      {
        tech: [a, b],
        books,
      },
    ],
  } = customer;
  console.log(tech, a, b, c);

  return (
    <div className="App">
      {/* <UserCard username={user.username} age={user.age} /> */}
      <UserCard {...user} />
    </div>
  );
}

export default App;
