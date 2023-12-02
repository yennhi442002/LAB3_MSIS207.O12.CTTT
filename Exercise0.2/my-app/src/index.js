import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href='item'>Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <smaill>&copy; 2021</smaill>
    </footer>
  </section>
);

reportWebVitals();
