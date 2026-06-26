// DOM Element Selection
const scoreInput = document.getElementById('scoreInput');
const calcBtn = document.getElementById('calcBtn');
const resultsDiv = document.getElementById('results');

// Event Listener for the Calculate Button
calcBtn.addEventListener('click', calculateGrade);

// Extension: Keyboard Support (Pressing 'Enter' triggers calculation)
scoreInput.addEventListener('keypress', 

function(event) {
    if (event.key === 'Enter') {
        calculateGrade();
    }
});

function calculateGrade() {
    // 1. Retrieve and parse input value
    const rawInput = scoreInput.value.trim();
    const score = parseFloat(rawInput);

    // 2. Input Validation
    // Checks if empty, not a number, or outside the 0-100 threshold
    if (rawInput === "" || isNaN(score) || score < 0 || score > 100) {
        resultsDiv.innerHTML = `<p class="error"><strong>Error:</strong> Please enter a valid number between 0 and 100.</p>`;

        return; // Stop execution if invalid
    }

    // 3. Grade Calculation & Descriptions Logic
    let grade = '';
    let description = '';
    let gradeClass = '';

    if (score >= 70 && score <= 100) {
        grade = 'A';
        description = 'Excellent';
        gradeClass = 'grade-A';
    } else if (score >= 60 && score < 70) {
        grade = 'B';
        description = 'Very Good';
        gradeClass = 'grade-B';
    } else if (score >= 50 && score < 60) {
        grade = 'C';
        description = 'Good';
        gradeClass = 'grade-C';

    } else if (score >= 40 && score < 50) {
        grade = 'D';
        description = 'Pass';
        gradeClass = 'grade-D';
    } else {
        grade = 'F';
        description = 'Fail';
        gradeClass = 'grade-F';
    }

    // 4. DOM Manipulation (Output display)
    resultsDiv.className = "results-container success"; // Apply container styling
    resultsDiv.innerHTML = `
        <p><strong>Entered Score:</strong> ${score}</p>
        <p><strong>Calculated Grade:</strong> <span class="${gradeClass}">${grade}</span></p>
        <p><strong>Performance:</strong> 

<em>${description}</em></p>
    `;

    // 5. Reset functionality for subsequent entries
    scoreInput.value = '';
    scoreInput.focus(); // Returns focus back to input for quick continuous tracking
}
