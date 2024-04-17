const elem = document.querySelector('input');
let elem_re = document.getElementById("result");
elem.addEventListener('input', handleInput);

//
//
function Pali(info) {
    let amount = info.length;
    if (amount > 0) {
        let amount_1;
        let is_eq = 1;
        if (info % 2 == 1) {
            amount_1= (amount-1 )/2;
        }
        else {
            amount_1 = amount / 2;
        }
        //
        for (let x = 0; x < amount_1; x++) {
            console.group()
            console.log(info[x]);
            console.log(info[amount - (x+1)]);
            if (info[x] != info[amount - (x+1)]) {
                is_eq = 0;
                x = amount;
            }
        }
        if (is_eq) {
            return ["It is a Palindrome",2];
        }
        return ["It is not a Palindrome",1];
    }
    return ["", 0];
}

function do_info(data) {
    let iner = document.createElement("p2")
    let is_ = Pali(data)
    iner.innerText = is_[0];
    if (is_[1] == 1) {
        iner.style.color = "Red";
    }
    if (is_[1] == 2) {
        iner.style.color = "Green";
    }
    return iner;
}

function handleInput(){
    elem_re.innerHTML = "";
    elem_re.appendChild(do_info(elem.value));
}