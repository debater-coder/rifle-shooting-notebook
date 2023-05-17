import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function App() {
  return (
    <>
      <Counter />
      <h1>React Exercises</h1>

      <h2>Exercise 1</h2>
      <p>
        Make a button, such that when clicked it causes an alert to pop up with
        the text "Hello World!"
      </p>
      <p>
        <i>
          Hint: use the <code>alert()</code> function to display an alert.
        </i>
      </p>

      <h2>Exercise 2</h2>
      <p>
        Make a heading with a count, above three buttons labeled increment,
        decrement and reset, that do their respective functions to the count.
      </p>

      <h2>Exercise 3</h2>
      <p>
        Make a <code>{"<Button />"}</code> component, that is green, and has the
        text hello world. Use the component three times.
      </p>

      <h2>Execise 4</h2>
      <p>
        Make a <code>{"<NutritionInfo />"}</code> component, that takes in the
        props: Energy, Protein, Fat, Sugar. It should display them in a nice-ish
        looking table.
      </p>

      <h2>Exercise 5</h2>
      <p>Make a form that converts mm to inches</p>
    </>
  );
}

export default App;
