import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyButton from './MyButton';
import MyList from './MyList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
};

function render(props) {
  root.render(
    <main>
      <MyButton text={props.text} disabled={props.disabled} />
      <MyList items={props.items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);

reportWebVitals();
