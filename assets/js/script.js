function display(idSection) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(idSection);
    selectedSection.classList.add('active');
}
