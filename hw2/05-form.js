// Add your code here

let form = document.getElementById('form');
let name_ = document.getElementById('ful_name');
let email_ = document.getElementById('email');
let status_ = document.getElementById('re_st');
let taken_1 = document.getElementById('taken_courses_1');
let taken_2 = document.getElementById('taken_courses_2');
let taken_3 = document.getElementById('taken_courses_3');
let text_ = document.getElementById('more_info');

form.addEventListener('submit', form_submit);

function name_form() {
    return {
        name: name_.value,
        email: email_.value,
        status: return_status(),
        Pre_classe: return_preClasses(),
        text: text_.value
    };
}

function form_submit(event) {
    event.preventDefault();
    let data_ = name_form();
    console.group('Data form Output or Form');
    //console.log(name_form());
    console.log(`Name is: ${data_.name}`);
    console.log(`Email is: ${data_.email}`);
    console.log(`Registration Status: ${data_.status}`);
    console.log(`Pre-Classes: ${data_.Pre_classe}`);
    if (data_.text !== '') {
        console.log(`Text left: ${data_.text}`);
    }
    console.groupEnd();
}

function return_status() {

    if (status_.value === '0') {
        return 'Un-Registered';
    }
    if (status_.value === '1') {
        return 'Registered';
    }
    if (status_.value === '2') {
        return 'On-Hold';
    }
    return 'Unkown';
}

function return_preClasses() {
    let string_ = '';
    if (taken_1.checked === true) {
        string_ += 'Programming Languages';
    }
    if (taken_2.checked === true) {
        if (string_ !== '') {
            string_ += ', ';
        }
        string_ += 'Operating Systems';
    }
    if (taken_3.checked === true) {
        if (string_ !== '') {
            string_ += ', ';
        }
        string_ += 'Full Stack Web Development';
    }
    if (string_ !== '') {
        string_ += '.';
    }

    return string_;
}