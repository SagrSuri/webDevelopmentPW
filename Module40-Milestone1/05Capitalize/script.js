document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const capitalizedName = capitalize(nameInput);
    document.getElementById('result').innerText = "Capitalized name: " + capitalizedName;
});

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
