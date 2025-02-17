import { useState } from "react"

// Component should be exported and should start with Capital letter
// there can be only one default export
// You can re-use this component and each usage maintains its own state
// you can also do named exports

export default function Count() {
  const [count, setCount] = useState(0);
  // you can write the JavaScript logic inside the JSX
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}