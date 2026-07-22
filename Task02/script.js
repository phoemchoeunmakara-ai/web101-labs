document.getElementById('checkBtn').addEventListener('click', () => {
    const score = parseInt(document.getElementById('gradeInput').value);
    const output = document.getElementById('output');
    if (isNaN(score) || score < 0 || score > 100) return;

    output.className = 'mb-0 ';
    if (score >= 90) {
        output.textContent = `Score: ${score} - Grade A`;
        output.classList.add('grade-a');
    } else if (score >= 50) {
        output.textContent = `Score: ${score} - Grade C`;
        output.classList.add('grade-c');
    } else {
        output.textContent = `Score: ${score} - Grade F`;
        output.classList.add('grade-f');
    }
});