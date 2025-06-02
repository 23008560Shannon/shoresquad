// ShoreSquad JS: Interactivity & Performance
// Features: Map loading, weather fetch, crew invite, accessibility enhancements

document.addEventListener('DOMContentLoaded', () => {
    // Simulate map loading
    const mapDiv = document.getElementById('map');
    setTimeout(() => {
        mapDiv.textContent = 'Interactive map coming soon!';
    }, 1000);

    // Simulate weather fetch
    const weatherDiv = document.getElementById('weather');
    setTimeout(() => {
        weatherDiv.textContent = 'Sunny, 24°C (Demo)';
    }, 1200);

    // Crew invite feature
    const crewList = document.getElementById('crew-list');
    const inviteBtn = document.getElementById('invite-btn');
    let crew = ['You'];
    function renderCrew() {
        crewList.innerHTML = '';
        crew.forEach(member => {
            const li = document.createElement('li');
            li.textContent = member;
            crewList.appendChild(li);
        });
    }
    renderCrew();
    inviteBtn.addEventListener('click', () => {
        const name = prompt('Enter your friend\'s name:');
        if (name) {
            crew.push(name);
            renderCrew();
        }
    });

    // Accessibility: focus styles
    document.body.addEventListener('keyup', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
});
