function generatePattern() {
    const rows = parseInt(document.getElementById('rows').value);
    let pattern = '';
    for (let row = rows; row >= 1; row--) {
        for (let col = 1; col <= row; col++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    document.getElementById('pattern').textContent = pattern;
}
