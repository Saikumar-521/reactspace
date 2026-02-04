/*
hooks:
the hook are the react functions it helps to manage the state and lifecycle methods in functional components.in replace of class components.

types of hooks:
1.predefined hooks:
2.custom hooks

1.predefined hooks:
  A.Statemanent hooks:
    1.useState
    2.useReducer
  B.side effect hooks:
    1.useEffect
    2.useLayoutEffect
  C.performance hooks:
    1.useMemo
    2.useCallback
    3.usetransition
    4.useDeferredValue
  D.Reference and Dom hooks:
    1.useRef
    2.useImperativeHandle
    3.useId
  E.context hooks:
    1.useContext
  F.routing hooks:
    1.useNavigate
    2.useParams
    3.useLocation
    4.useRoutes
 G.Redux hooks:
    1.useSelector
    2.useDispatch
  
  h.custom hooks:
  custom hooks are the user defined functions which help to reuse the logic across the components.
  example:
    1.useFetch
    2.useLocalStorage
    3.usePrevious
    4.useOnClickOutside
















    A. State Management Hooks
1. useState

Definition:
useState is used to create and manage state variables inside functional components.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

2. useReducer

Definition:
useReducer is used for complex state logic, similar to Redux reducer pattern, useful when state transitions depend on actions.

Example:

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC": return state + 1;
    case "DEC": return state - 1;
    default: return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );
}

B. Side Effect Hooks
1. useEffect

Definition:
Runs side effects such as API calls, event listeners, or updating the DOM after rendering.

Example:

import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h3>{count}</h3>;
}

2. useLayoutEffect

Definition:
Runs synchronously before the browser paints the UI. Used for layout measurements.

Example:

import { useLayoutEffect, useRef } from "react";

function Box() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect());
  }, []);

  return <div ref={boxRef}>Hello</div>;
}

C. Performance Hooks
1. useMemo

Definition:
Memoizes (caches) the result of an expensive function to avoid re-calculation.

Example:

const expensiveCalc = (num) => num * 100000;
const result = useMemo(() => expensiveCalc(value), [value]);

2. useCallback

Definition:
Returns a memoized function reference to prevent unnecessary re-renders.

Example:

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

3. useTransition

Definition:
Helps make state updates non-blocking and smooth during heavy UI updates.

Example:

const [isPending, startTransition] = useTransition();

startTransition(() => {
  setList(bigArray);
});

4. useDeferredValue

Definition:
Delays updating a value to keep UI responsive while processing heavy tasks.

Example:

const deferredText = useDeferredValue(text);

D. Reference & DOM Hooks
1. useRef

Definition:
Used for accessing DOM elements or storing mutable values without re-rendering.

Example:

const inputRef = useRef();
<input ref={inputRef} />

2. useImperativeHandle

Definition:
Allows customizing what ref exposes when using forwardRef.

Example:

useImperativeHandle(ref, () => ({
  focusInput() {
    inputRef.current.focus();
  }
}));

3. useId

Definition:
Generates unique IDs for accessibility or form elements.

Example:

const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />

E. Context Hook
1. useContext

Definition:
Provides access to values from Context without passing props manually.

Example:

const value = useContext(MyContext);

F. Routing Hooks (React Router)
1. useNavigate

Navigate programmatically.

const navigate = useNavigate();
navigate("/home");

2. useParams

Get URL parameters.

const { id } = useParams();

3. useLocation

Get current route info.

const location = useLocation();

4. useRoutes

Create routes inside components.

const routes = useRoutes([...]);

G. Redux Hooks
1. useSelector

Reads state from Redux store.

const count = useSelector((state) => state.counter.count);

2. useDispatch

Dispatches actions.

const dispatch = useDispatch();
dispatch({ type: "INC" });

H. Custom Hooks
Definition:

Custom hooks are reusable functions that contain React hook logic and can be shared across components.

Examples
Name	Purpose
useFetch	Fetch API data
useLocalStorage	Store data in localStorage
usePrevious	Store previous value
useOnClickOutside	Detect outside clicks

Example: useLocalStorage

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

    
*/