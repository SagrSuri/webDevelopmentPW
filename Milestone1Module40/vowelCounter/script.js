function countVowels() {
    const name = document.getElementById('name').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
  
    for (let char of name) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    document.getElementById('result').textContent = `Total vowels in your name: ${vowelCount}`;
  }
  