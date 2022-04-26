import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
  <div class="text-center mt-8">
    <h1 class="text-4xl font-bold">Hello Vite!</h1>
    <a class="text-blue-600" href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>`;
}
