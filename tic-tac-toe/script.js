const area = document.getElementById('area');
let step = 0;
let result = '';

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        step % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        step += 1;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
            ) {
                result = 'XXX';
                checkResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
            ) {
                result = '000';
                checkResult(result);
            }
    }
}

const checkResult = winner => {
    console.log(winner);
}