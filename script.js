// Get some elements
const button = document.querySelector('button');
const form = document.querySelector('form');

// Add click event to button
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Add submit event to form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});

// Dark mode toggle
const darkModeButton = document.createElement('button');
darkModeButton.textContent = '🌙 Dark Mode';
document.body.prepend(darkModeButton);

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Random color generator for card
const card = document.querySelector('.card');
card.addEventListener('mouseenter', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = randomColor;
});

// Form validation
const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', () => {
    if (emailInput.value.includes('@')) {
        emailInput.style.borderColor = 'green';
    } else {
        emailInput.style.borderColor = 'red';
    }
});

// Counter
let count = 0;
const counterDiv = document.createElement('div');
counterDiv.innerHTML = `
    <h3>Count: <span id="count">0</span></h3>
    <button id="increment">+</button>
    <button id="decrement">-</button>
    <button id="reset">Reset</button>
`;
document.body.appendChild(counterDiv);

document.getElementById('increment').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    document.getElementById('count').textContent = count;
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    document.getElementById('count').textContent = count;
});

//
