document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    // Function to show the selected section
    function showSection(sectionId) {
        hideAllSections();
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.classList.remove('hidden');
        }
    }

    // Event listeners for navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            showSection(targetId);
        });
    });



    const energy=document.getElementById('energy');
    const time=document.getElementById('sunHours');

    function calculate(){
        const energy=parseFloat(energy.value);
        const time=parseFloat(time.value);
        const result=(energy / 720)*(time);
        return result;
    }
    function output(){
        const resultop=document.getElementById('result');
        resultop.textContent='${calculate()} kW';

    }
    energy.addEventListener('input',resultop);
    time.addEventListener('input',resultop);
});