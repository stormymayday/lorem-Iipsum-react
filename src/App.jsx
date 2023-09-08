import { useState } from "react";
import data from './data.js';

const App = () => {

  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  console.log(text);

  return (
    <section className="section-center">

      <h4>tiered of boring lorem ipsum?</h4>

      <form className="lorem-form">

        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />

        <button type="submit" className="btn">generate</button>

      </form>

    </section>
  );
};
export default App;
