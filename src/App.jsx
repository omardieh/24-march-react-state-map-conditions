import "./App.css";
// import React from "react";
import { useState } from "react";
import moviesDB from "./assets/movies.json";

// [1,2,3,4,5].filter((e) => e !== 1)
// [2,3,4,5]

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [movies, setMovies] = useState(moviesDB);
  // let number = 0;
  // number++;
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }

  // function updateUsername() {
  //   setUsername()
  // }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}> decrement </button>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      {/* <h2> username is : {username} </h2> */}
      {/* <p> {username.length > 6 ? "username is too long" : username} </p> */}
      {username.length > 6 && "username is too long"}
      <ul>
        {/* {movies.map((movie, index) => {
          return (
            <li key={index + movie.title}>
              {Object.keys(movie).map((e) => e + " ")}
              {Object.values(movie).map((e) => e + " ")}
            </li>
          );
        })} */}
        {/* {movies.map(({title}, index) => (
          <li key={index + title}>{title}</li>
        ))} */}
        {movies.map((movie, index) => (
          <li
            onClick={() => setMovies(movies.filter((e) => e._id !== movie._id))}
            key={index + movie.title}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
