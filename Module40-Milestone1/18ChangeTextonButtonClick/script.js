document.getElementById('toggle-button').addEventListener('click', function() {
    const heading = document.getElementById('heading');
    if (heading.textContent === 'The most affordable learning platform') {
        heading.textContent = 'PW Skills';
    } else {
        heading.textContent = 'The most affordable learning platform';
    }
});
