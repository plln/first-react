import { createRoot } from 'react-dom/client';
//import { createElement } from 'react';

const root = createRoot(document.getElementById('root'));

function MyAwesomeHeader() {
  return (
    <h2 className="header">Awesome Header!</h2>
  );
}

function MainContent() {
  //const reactElement = createElement('h1', null, 'Hello ReactJS!');
  const reactElement = (
    <>
      <h1 className="title">Why React is cool?</h1>
      <ul>
        <li>It is Composable!</li>
        <li>And it is also Declarative!</li>
      </ul>
    </>
  );
  console.log(reactElement);
  return reactElement;
}

function MyAwesomeFooter() {
  return (
    <h2 className="footer">Awesome Footer!</h2>
  );
}

root.render(
  <>
    <MyAwesomeHeader />
    <MainContent />
    <MyAwesomeFooter />
  </>
);

// imperative
// const h1 = document.createElement('h1');
// h1.textContent = 'This is imperative coding!';
// h1.className = 'title';
// const rootElement = document.getElementById('root');
// rootElement.appendChild(h1);
