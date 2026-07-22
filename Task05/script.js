let tasks = [];

function render() {
    document.getElementById('taskList').innerHTML = tasks.map((t, i) => `
        <div class="task-item ${t.done ? 'done' : ''}" onclick="toggle(${i})">
            <span>${t.text}</span>
            <button class="del-btn" onclick="del(event, ${i})">x</button>
        </div>
    `).join('');
    document.getElementById('counter').textContent = `${tasks.filter(t => t.done).length} of ${tasks.length} tasks done`;
}

document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    if (!input.value.trim()) return;
    tasks.push({ text: input.value, done: false });
    input.value = '';
    render();
});

window.toggle = (i) => { tasks[i].done = !tasks[i].done; render(); };
window.del = (e, i) => { e.stopPropagation(); tasks.splice(i, 1); render(); };