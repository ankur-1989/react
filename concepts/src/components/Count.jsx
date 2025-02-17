import { useState } from "react"

// Component should be exported and should start with Capital letter
// there can be only one default export

export default function Count() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    )
}