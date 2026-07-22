const btn = document.getElementById('toggleBtn');
const bio = document.getElementById('bio');

btn.addEventListener('click', () => {
    bio.classList.toggle('d-none');
    btn.textContent = bio.classList.contains('d-none') ? 'Show more' : 'Show less';
});