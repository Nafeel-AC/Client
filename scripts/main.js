const sections = [
  'header', 'mv', 'about', 'concept', 'concept-highlight', 'seminar', 'voice', 'notice', 'contact', 'footer'
];
sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
      // Load CSS for all sections including header
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `styles/${section}.css`;
      document.head.appendChild(link);
    });
});
// Load section JS if needed
sections.forEach(section => {
  const scriptPath = `scripts/${section}.js`;
  fetch(scriptPath).then(res => {
    if (res.ok) {
      console.log(`Loading script: ${scriptPath}`);
      const script = document.createElement('script');
      script.src = scriptPath;
      script.onload = () => console.log(`Script loaded: ${scriptPath}`);
      script.onerror = () => console.error(`Script failed to load: ${scriptPath}`);
      document.body.appendChild(script);
    } else {
      console.log(`Script not found: ${scriptPath}`);
    }
  }).catch(err => {
    console.error(`Error loading script ${scriptPath}:`, err);
  });
});




