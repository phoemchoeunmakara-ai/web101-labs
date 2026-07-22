let scores = [45, 82, 91, 60, 77, 33];

function getColor(s) {
    return s >= 90 ? 'grade-a' : s >= 50 ? 'grade-c' : 'grade-f';
}

function render() {
    document.getElementById('scoreList').innerHTML = scores.map(s => `<div class="${getColor(s)}">${s}</div>`).join('');
    const max = Math.max(...scores), min = Math.min(...scores);
    const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
    document.getElementById('stats').textContent = `Highest: ${max} | Lowest: ${min} | Average: ${avg}`;
}

document.getElementById('addBtn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('newScore').value);
    if (isNaN(val) || val < 0 || val > 100) return alert("Please enter a score between 0 and 100");
    scores.push(val);
    document.getElementById('newScore').value = '';
    render();
});

render();