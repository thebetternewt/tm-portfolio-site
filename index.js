console.log('Hello world 2!');
const pages = {
  landing: import('./landing.html')
};

async function renderPage(name) {
  const page = await pages[name];
  document.getElementById('app').innerHTML = page;
}

renderPage('import');
