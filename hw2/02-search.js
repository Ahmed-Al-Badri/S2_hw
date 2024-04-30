// Add your code here

let result = document.getElementById('result');
let input = document.getElementById('userInput');
let button_ = document.getElementById('button');
let last_result = '';

button_.addEventListener('click', handleClick);

input.addEventListener('input', handle_result);
input.addEventListener('keypress', handleClick_v);
//Nice the addEvent Listener  handles the arguments. https://www.w3schools.com/jsref/met_document_addeventlistener.asp
function handleClick_v(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        last_result = input.value;
        input.placeholder = last_result;
        handle_result();
    }
}

function handleClick() {
    last_result = input.value;
    input.placeholder = last_result;
    input.focus();
    //if (last_result != '') {
        
    //}
}

function handle_result() {

    if (input.value != '') {
        search_result(result, input.value);
    }    
    else {
        if (last_result != '') {
            search_result(result, last_result);
        }
        else {
            result.innerHTML = '';
        }
    }
}

function inner_result_elem(result, data_, found) {
    let section = document.createElement('section')
    let elem_ = document.createElement('div');
    elem_.className = 'card';
    let elem_inner = document.createElement('h5');
    elem_inner.className = 'card-title';
    elem_inner.innerHTML = high_lighter(data_.name, found);
    elem_.append(elem_inner);
    elem_inner = document.createElement('p1');
    elem_inner.innerText = `Birth year: ${data_.birth_year}`;
    elem_.append(elem_inner);
    section.append(elem_);
    result.append(section);
}

function search_string(text, text_find) {
    let text_len = text.length;
    let find_len = text_find.length;
    if (text_len > 0 && find_len <= text_len) {
        for (lp = 0; lp < text_len; lp += 1){
            for (lp_2 = 0; lp_2 < find_len; lp_2 += 1){
                if (text[lp + lp_2] !== text_find[lp_2]) {
                    lp_2 = find_len;
                }
                if (lp_2 === (find_len - 1))
                    return true;
            }
        }
    }

    return false;
}

function search_result(result, search_data) {
    console.log(characters);
    result.innerHTML = '';
    for (data in characters) {
        console.log(characters[data].name);
        if (search_string(characters[data].name, search_data) === true) {
            inner_result_elem(result, characters[data], search_data);
        }
    }
}