import { createRoot } from 'react-dom/client'

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

createRoot(document.getElementById('intro')).render(
  myElement
);