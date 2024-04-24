function high_lighter(section, info) {
    let current = '';
    let hold_word = '';
    let count_one = section.length;
    let count_two = info.length;
    let skip = 0;
    for (lp1 = 0; lp1 < count_one; lp1 += 1){
        for (lp2 = 0; lp2 < count_two; lp2 += 1){
            hold_word += section[lp2 + lp1];
            if (section[lp2 + lp1] != info[lp2]) {
                lp2 = count_two;
                hold_word = '';
            }
            if (lp2 === (count_two - 1)) {
                skip = count_two;
                if (count_two === 1) {
                    skip = 1;
                }
                current += `<mark>${hold_word}</mark>`;
                hold_word = '';
            }
        }
        if (skip) {
            /*
            if (count_two !== 1) {
                lp1 += skip;
                //lp1 += 1;
            } */
            lp1 += skip;
            lp1 -= 1;
            skip = 0;
        }
        else {
            current += section[lp1];
        }
    }

    return current;
}