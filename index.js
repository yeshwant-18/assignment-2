function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function countVowelsAndConsonants() {
    const str = document.getElementById('stringInput').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantsCount++;
        }
    }

    document.getElementById('stringResult').textContent = `Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`;
}

function checkPalindrome() {
    const userInput = document.getElementById('palindromeInput').value;
    const reversedInput = userInput.split('').reverse().join('');
    
    document.getElementById('palindromeResult').textContent = userInput === reversedInput ? 'It\'s a palindrome.' : 'It\'s not a palindrome.';
}

function calculateTip() {
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentageInput').value);
    const tipAmount = subtotal * (tipPercentage / 100);
    const totalAmount = subtotal + tipAmount;

    document.getElementById('tipResult').textContent = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}
