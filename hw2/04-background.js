// Add your code here
let doc_color = document.getElementsByTagName('body')[0];
let button_ = document.getElementById('button_');
let seconds = document.getElementById('second_');
let button_status = NaN;
let seconds_time = 1;

button_.addEventListener('click', button_event);
seconds.addEventListener('input', change_inter);
seconds.addEventListener('keypress', seconds_start);
doc_color.addEventListener('keypress', seconds_start);

setInterval(change_color, seconds_time * 1000);

function button_event() {
    if (button_status) {
        stop_color();
    }
    else {
        start_color();
    }
}

function start_color() {
    button_status = 1;
    button_.className = 'btn btn-danger';
    button_.value = 'Stop';
}

function stop_color() {
    button_status = NaN;
    button_.className = 'btn btn-primary';
    button_.value = 'Start';
}
function change_inter() {
    stop_color();
    //let hold = seconds.value;
    seconds_time = seconds.value;
}

function seconds_start(key_pressed) {
    if (key_pressed.key === 'Enter') {
        button_event();
    }
}

function change_color() {
    if (button_status === 1 && seconds_time > (-1)) {
        let _color = `rgba(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}, .3)`;
        //console.log(_color);
        doc_color.style.backgroundColor = _color;
    }
    //255
}