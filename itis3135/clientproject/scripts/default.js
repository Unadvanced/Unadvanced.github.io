function showSection(sectionID) {
    const sections = document.getElementsByTagName("section");

    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    const sectionToShow = document.getElementById(sectionID);

    sectionToShow.style.display = 'block';
}