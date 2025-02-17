# React component states

* Variables dont trigger re-render
* variables dont persist data between re-render
* need to create state to trigger and need to maintain state between re-renders.
* use useState hook to set the state. convention is const [something, setSomething]

How to decide if need to create multiple state variable or one ?

1. if the states are related then one should be there and if they are unrelated then create multiple
Treat states as immutable and dont mutate the state. for objects, use useImmer from 'use-immer' package.

you manipulate the UI through states and trigger the rendering of the components. and you describe what UI should look like for a particular state.

## When developing a component

Identify your component’s different visual states - state machine
Determine what triggers those state changes
Represent the state in memory using useState
Remove any non-essential state variables
    Does this state cause a paradox?
    Is the same information available in another state variable already?
    Can you get the same information from the inverse of another state variable?
Connect the event handlers to set the state.

## Principles of restructuring state

1. 