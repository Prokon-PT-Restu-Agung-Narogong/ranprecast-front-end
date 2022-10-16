import App from './views/app';
import '../styles/main.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  header: document.querySelector('header'),
  main: document.querySelector('main'),
  footer: document.querySelector('footer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
