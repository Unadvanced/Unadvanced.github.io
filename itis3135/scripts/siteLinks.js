document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
        ITIS3135 | Alec Bronz's Atheist Baboon
      </h1>
      <nav>
        <a href="index.html">Home</a> ||
        <a href="introduction.html">Introduction</a> ||
        <a href="tables.html">Tables</a> ||
        <a href="form.html">Forms</a> ||
        <a href="contract.html">Contract</a> ||
        <a href="firstScripts.html">First Scripts</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  