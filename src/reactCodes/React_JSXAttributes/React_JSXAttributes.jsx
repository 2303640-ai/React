import { createRoot } from 'react-dom/client'

function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

createRoot(document.getElementById('attribute')).render(
  <Car />
);