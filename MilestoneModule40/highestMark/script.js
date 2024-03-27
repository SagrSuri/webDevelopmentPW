function findHighestMarks() {
    const mark1 = parseFloat(document.getElementById('mark1').value);
    const mark2 = parseFloat(document.getElementById('mark2').value);
    const mark3 = parseFloat(document.getElementById('mark3').value);
    const mark4 = parseFloat(document.getElementById('mark4').value);
    const mark5 = parseFloat(document.getElementById('mark5').value);

    const marks = [mark1, mark2, mark3, mark4, mark5];

    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    document.getElementById('result').innerText = "Highest marks scored by any student: " + highestMarks;
}
