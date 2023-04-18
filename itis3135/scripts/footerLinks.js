document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
    <nav>
        <a href="https://webpages.charlotte.edu/abronz/">Webspace</a>
        ||
        <a href="https://github.com/Unadvanced">Github</a>
        ||
        <a href="https://www.freecodecamp.org/AJ_Bronz">FreeCodeCamp</a>
        ||
        <a href="https://www.codecademy.com/profiles/AJBronz">Codecademy</a>
        ||
        <a href="https://www.linkedin.com/in/alec-bronz-552119265/">LinkedIn</a>
    </nav>
        <p>Site designed by AJ. &copy;2023</p>
        <a id="img-link" href= "https://validator.w3.org/check?uri=referer">
        <img id="img-link" src="images/button_validation_html5.png" width="88" height="31" alt="Link to HTML validator">
        </a>
        <a id="img-link" href= "https://jigsaw.w3.org/css-validator/check/referer">
        <img id="img-link" src="images/button_validation_css.png" width="88" height="31" alt="Link to CSS validator">
        </a>
    `;
  
    document.body.appendChild(footer);
  });  