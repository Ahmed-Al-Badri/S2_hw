// Add your code here
let desc_location = document.getElementById('descri')
const desc = desc_location.innerText;
let find_ = document.getElementById('userInput');
let last_input = '';
find_.addEventListener('keydown', handleKeyDown);
find_.addEventListener('input', handle_value_Down);

function handleKeyDown(enter) {
    if (enter.key === 'Enter') {
        last_input = find_.value;
        find_.placeholder = last_input;
    }
}

function handle_value_Down() {
    if (find_.value != '') {
        desc_location.innerHTML = high_lighter(desc, find_.value);
    }
    else {
        desc_location.innerHTML = high_lighter(desc, last_input);
    }
}