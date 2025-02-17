// Write a component that demomstrates that Variables dont trigger re-render and variables dont persist data between re-render
import { useState } from "react";

/**you manipulate the UI through states and trigger the rendering of the components. and you describe what UI should look like for a particular state. */

export default function State() {
  let count = 0;
  /** if the states are related then one should be there and if they are unrelated then create multiple
Treat states as immutable and dont mutate the state. for objects, use useImmer from 'use-immer' package. */
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleNameChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };
  return (
    // This will always be 0 as the variable is not stored in the state
    <>
      <form>
        <label htmlFor="firstName">FirstName: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={name.firstName}
          onChange={handleNameChange}
        />
        <label htmlFor="lastName">LastName: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={name.lastName}
          onChange={handleNameChange}
        />
      </form>
      <h2>When developing the component</h2>
      <ul>
        <li>
          Identify your component’s different visual states - state machine
        </li>
        <li>Determine what triggers those state changes</li>
        <li>Represent the state in memory using useState</li>
        <li>Remove any non-essential state variables</li>
        <ol>
          <li>Does this state cause a paradox?</li>
          <li>
            Is the same information available in another state variable already?
          </li>
          <li>
            Can you get the same information from the inverse of another state
            variable?
          </li>
        </ol>
        <li>Connect the event handlers to set the state.</li>
      </ul>
      <button onClick={() => count++}>count is {count}</button>
    </>
  );
}
