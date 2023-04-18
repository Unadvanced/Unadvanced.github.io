/*function toggleSection(sectionID) {
    var navLinks = document.querySelectorAll("nav a");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function (event) {
            event.preventDefault();

            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove("active");
            }

            this.classList.add("active");

            var target = this.getAttribute("data-target");

            var sections = document.querySelectorAll("section");
            for (var k = 0; k < sections.length; k++) {
                sections[k].classList.remove("active");
            }

            document.getElementById(target).classList.add("active");
        });
    }
}*/

/*function toggleSection(sectionID) {
    var section = document.getElementById(sectionID);

    var sections = document.getElementsByTagName('section');

    for(var i = 0; i < sections.length; i++) {
        if(sections[i] !== section) {
            sections[i].style.display = "none";
        }
    }

    if(section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}*/

function showSection(sectionID) {
    const sections = document.getElementsByTagName("section");

    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    const sectionToShow = document.getElementById(sectionID);

    sectionToShow.style.display = 'block';
}